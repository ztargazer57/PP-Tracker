"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createSavingsEntry, fetchSavings } from "@/lib/system";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type SavingsEntry = {
  id: number;
  amount: number;
  note?: string | null;
  createdAt: string;
};

function animateValue(
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void,
) {
  const start = performance.now();

  function frame(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = from + (to - from) * eased;

    onUpdate(current);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

export default function SavingsWidget() {
  const [total, setTotal] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);
  const [entries, setEntries] = useState<SavingsEntry[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const previousTotalRef = useRef(0);

  useEffect(() => {
    async function loadSavings() {
      try {
        const data = await fetchSavings();
        const nextTotal = Number(data.total ?? 0);

        setEntries(data.entries ?? []);
        setTotal(nextTotal);
        setDisplayTotal(nextTotal);
        previousTotalRef.current = nextTotal;
      } catch (error) {
        console.error("Failed to load savings:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSavings();
  }, []);

  useEffect(() => {
    const from = previousTotalRef.current;
    const to = total;

    animateValue(from, to, 500, (value) => {
      setDisplayTotal(value);
    });

    previousTotalRef.current = total;
  }, [total]);

  const parsedAmount = useMemo(() => {
    const trimmed = input.trim();
    if (!trimmed) return null;

    const amount = Number(trimmed);
    if (Number.isNaN(amount)) return null;

    return amount;
  }, [input]);

  const handleSubmit = async () => {
    if (parsedAmount === null) return;

    try {
      setSaving(true);

      const data = await createSavingsEntry(parsedAmount);

      setTotal(Number(data.total ?? 0));
      setEntries((prev) => [data.entry, ...prev]);

      setInput("");
    } catch (error) {
      console.error("Failed to save savings entry:", error);
    } finally {
      setSaving(false);
    }
  };

  const formattedDisplayTotal = displayTotal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="w-full min-h-full min-w-fit mx-auto space-y-4 grid grid-cols-2 p-4">
        <div className="p-5">
            <h1 className="text-xl">Akong Natigom</h1>
        <div className="text-4xl font-bold text-emerald-400 mt-8">
          {loading ? "..." : formattedDisplayTotal}
        </div>

      <div className="flex gap-2 w-fit mt-8">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Enter amount"
          inputMode="decimal"
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={saving || parsedAmount === null}
        >
          {saving ? "Saving..." : "Add"}
        </Button>
      </div>
        </div>

      <div className="space-y-2">
        <h2 className="text-sm font-medium">Recent Entries</h2>

        <div className="max-h-60 overflow-auto space-y-2">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between rounded-md border p-3"
            >
              <div className="text-sm text-muted-foreground">
                {new Date(entry.createdAt).toLocaleString()}
              </div>
              <div
                className={`font-medium ${
                  entry.amount >= 0 ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {entry.amount >= 0 ? "+" : ""}
                {entry.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          ))}

          {!loading && entries.length === 0 && (
            <div className="text-sm text-muted-foreground text-center py-4">
              No savings entries yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
