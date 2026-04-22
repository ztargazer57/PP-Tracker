"use client";

import { getBestPieceByMonth, selectAsBestPiece } from "@/lib/system";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  640: 1,
};

const monthMap: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

export default function MasonryGrid({
  submissions,
  month,
}: {
  submissions: any[];
  month: string;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [savingId, setSavingId] = useState<number | null>(null);

  useEffect(() => {
  async function loadBestPiece() {
    try {
      const result = await getBestPieceByMonth(month);
      setSelectedId(result?.bestPieceId ?? null);
    } catch (error) {
      console.error("Error loading best piece:", error);
      setSelectedId(null);
    }
  }

  loadBestPiece();
}, [month]);

  async function handleSelect(id: number) {
    if (savingId === id) return;

    const previousId = selectedId;

    try {
      setSavingId(id);
      setSelectedId(id);

      await selectAsBestPiece(id);
    } catch (error) {
      console.error("Error selecting best piece:", error);
      setSelectedId(previousId);
    } finally {
      setSavingId(null);
    }
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 p-4"
      columnClassName="space-y-4"
    >
      {submissions.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-xl border shadow-sm"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title || "Submission image"}
              className="h-auto w-full object-cover"
            />
          )}

          <div className="p-3">
            <p className="text-sm font-semibold">{item.title}</p>

            <button
              type="button"
              onClick={() => handleSelect(item.id)}
              disabled={savingId === item.id}
              className="mt-3 w-full rounded-lg bg-black px-3 py-2 text-sm text-white hover:opacity-90 disabled:opacity-50"
            >
              {savingId === item.id
                ? "Saving..."
                : selectedId === item.id
                ? "Selected as Best"
                : "Select as Best"}
            </button>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
