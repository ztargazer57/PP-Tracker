"use client";

import { fetchNotes, fetchPostNotes } from "@/lib/system";
import { useState, useEffect, useRef } from "react";
import { Textarea } from "./ui/textarea";

export default function Notes() {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const firstLoadRef = useRef(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNotes();
        setNote(data.note ?? "");
      } catch (error) {
        console.error("Failed to load notes:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    if (loading) return;

    // skip auto-save on first load
    if (firstLoadRef.current) {
      firstLoadRef.current = false;
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setSaving(true);
        await fetchPostNotes(note);
      } catch (error) {
        console.error("Failed to save notes:", error);
      } finally {
        setSaving(false);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [note, loading]);

  return (
    <div className="relative h-full">
      <Textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="bg-input/0! transition-none! focus-visible:ring-0! focus-visible:border-0! border-none min-h-70 h-full sm:max-w-full md:max-w-full lg:max-w-full text-center p-7"
      />

      <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">
        {loading ? "Loading..." : saving ? "Saving..." : ""}
      </span>
    </div>
  );
}
