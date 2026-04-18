"use client";

import { useEffect, useState } from "react";
import { fetchAllWeeklySubmissions, fetchGalleryCover, updateGalleryCover } from "@/lib/system";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Submission = {
  id: number;
  title: string | null;
  image: string | null;
  date: string;
};

export default function GalleryCoverPickerDialog({
  onSaved,
}: {
  onSaved?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selected, setSelected] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;

    async function loadData() {
      try {
        const [cover, items] = await Promise.all([
          fetchGalleryCover(),
          fetchAllWeeklySubmissions(),
        ]);

        setSelected(cover?.picUrl || "");

        const usable = (items || []).filter((item: Submission) => item.image);
        setSubmissions(usable);
      } catch (error) {
        console.error("Failed to load gallery cover options:", error);
      }
    }

    loadData();
  }, [open]);

  async function handleSave() {
    try {
      setSaving(true);
      await updateGalleryCover(selected);
      setOpen(false);
      onSaved?.();
    } catch (error) {
      console.error("Failed to save gallery cover:", error);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="rounded-full bg-black/70 px-3 py-2 text-sm text-white backdrop-blur hover:bg-black/80"
        >
          Edit Cover
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Choose Gallery Cover</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {submissions.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No submission images available yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {submissions.map((submission) => {
                const active = selected === submission.image;

                return (
                  <button
                    key={submission.id}
                    type="button"
                    onClick={() => setSelected(submission.image || "")}
                    className={`overflow-hidden rounded-xl border transition-all ${
                      active
                        ? "border-orange-400 ring-2 ring-orange-400"
                        : "border-zinc-700"
                    }`}
                  >
                    <img
                      src={submission.image || ""}
                      alt={submission.title || "Submission"}
                      className="h-40 w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              disabled={!selected || saving}
              className="rounded-lg bg-orange-400 px-4 py-2 text-black font-medium disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Cover"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
