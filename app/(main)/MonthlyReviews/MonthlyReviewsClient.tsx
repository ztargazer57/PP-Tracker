"use client";

import Link from "next/link";
import { getBestPieces } from "@/lib/system";
import { useEffect, useMemo, useState } from "react";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";

const monthlyCards = [
  { id: 1, month: "January" },
  { id: 2, month: "February" },
  { id: 3, month: "March" },
  { id: 4, month: "April" },
  { id: 5, month: "May" },
  { id: 6, month: "June" },
  { id: 7, month: "July" },
  { id: 8, month: "August" },
  { id: 9, month: "September" },
  { id: 10, month: "October" },
  { id: 11, month: "November" },
  { id: 12, month: "December" },
];

export default function MonthlyReviewsClient() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const yearOptions = useMemo(() => {
    const years: number[] = [];
    for (let year = currentYear; year >= 2020; year--) {
      years.push(year);
    }
    return years;
  }, [currentYear]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await getBestPieces(selectedYear);
        setData(result);
      } catch (error) {
        console.error("Error loading best pieces:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [selectedYear]);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl">Monthly Reviews</h1>

        <div className="flex items-center gap-2">
          <label htmlFor="year" className="text-sm">
            Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="rounded-md border bg-background px-3 py-2 text-sm"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && (
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      )}

      <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {monthlyCards.map((month) => {
          const review = data.find((item) => item.month === month.id);
          const piece = review?.bestPiece;
          const shortMonth = month.month.slice(0, 3).toUpperCase();

          return (
            <Link
              key={month.id}
              href={`/MonthlyReviews/${month.month.toLowerCase()}?year=${selectedYear}`}
              className="group"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl border bg-secondary shadow-sm transition group-hover:scale-105">
                {piece?.image ? (
                  <>
                    <img
                      src={getCloudinaryImageUrl(piece.image)}
                      alt={piece.title || month.month}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/15" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                    <span className="text-sm text-muted-foreground">
                      No best piece yet
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-end">
                  <div className="absolute flex h-full w-12 flex-col items-center justify-center bg-black/60 font-bold tracking-widest text-white shadow-md transition group-hover:bg-black/80">
                    {shortMonth.split("").map((l, i) => (
                      <span key={i}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
