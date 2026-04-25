"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Field, FieldGroup } from "./ui/field";
import RoutineItem from "./HoldButton";
import {
  fetchDailyRoutineHistory,
  updateDailyRoutineHistoryRecord,
} from "@/lib/system";
import {
  DailyRoutineRecord,
  emitDailyRoutineUpdated,
} from "@/lib/dailyRoutineClient";

type RoutineField =
  | "gestureDrawing"
  | "construction"
  | "targetedPractice";

export function DailyRoutineHistory() {
  const [data, setData] = useState<DailyRoutineRecord[]>([]);
  const [editedRecord, setEditedRecord] = useState<DailyRoutineRecord | null>(null);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetchDailyRoutineHistory();
        setData(res);
      } catch (error) {
        console.error("Failed to load routine history:", error);
      }
    }

    loadData();
  }, []);

  const handleRowClick = (record: DailyRoutineRecord) => {
    setEditedRecord({ ...record });
    setOpen(true);
  };

  const handleToggleChange = (
    field: RoutineField,
    value: boolean | "indeterminate"
  ) => {
    const checked = value === true;

    setEditedRecord((prev) =>
      prev
        ? {
            ...prev,
            [field]: checked,
          }
        : prev
    );
  };

  const handleSave = async () => {
    if (!editedRecord) return;

    try {
      setSaving(true);

      await updateDailyRoutineHistoryRecord(editedRecord.id, {
        gestureDrawing: editedRecord.gestureDrawing,
        construction: editedRecord.construction,
        targetedPractice: editedRecord.targetedPractice,
      });

      setData((prev) =>
        prev.map((item) =>
          item.id === editedRecord.id ? editedRecord : item
        )
      );

      emitDailyRoutineUpdated();

      setOpen(false);
      setEditedRecord(null);
    } catch (error) {
      console.error("Failed to update routine record:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-full mx-auto lg:w-full">
      <h1 className="text-2xl text-center">Routine History</h1>

      <Table>
        <TableHeader>
          <TableRow className="border-b-2">
            <TableHead className="mx-auto">Date</TableHead>
            <TableHead className="text-xs text-center mx-auto">
              Gstr Drwng
            </TableHead>
            <TableHead className="text-xs text-center mx-auto">
              Constrctn
            </TableHead>
            <TableHead className="text-xs text-center mx-auto">
              Trgtd Prctc
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((record) => (
            <TableRow
              key={record.id}
              className="border-none cursor-pointer hover:bg-white/5 transition"
              onClick={() => handleRowClick(record)}
            >
              <TableCell className="text-xs text-gray-300">
                {new Date(record.date).toLocaleDateString()}
              </TableCell>

              <TableCell className="text-xs">
                <div className="flex justify-center items-center">
                  <div
                    className={`h-3 w-full rounded-l-full rounded-r-xs shadow-7xl ${
                      record.gestureDrawing
                        ? "bg-green-500/50"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              </TableCell>

              <TableCell className="text-xs">
                <div className="flex justify-center items-center">
                  <div
                    className={`h-3 w-full rounded-xs shadow-7xl ${
                      record.construction
                        ? "bg-green-500/50"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              </TableCell>

              <TableCell className="text-xs">
                <div className="flex justify-center items-center">
                  <div
                    className={`h-3 w-full rounded-r-full rounded-l-xs shadow-7xl ${
                      record.targetedPractice
                        ? "bg-green-500/50"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value) {
            setEditedRecord(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Routine Record</DialogTitle>
          </DialogHeader>

          {editedRecord && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {new Date(editedRecord.date).toLocaleDateString()}
              </p>

              <FieldGroup className="gap-3">
                <Field orientation="horizontal">
                  <RoutineItem
                    checked={editedRecord.gestureDrawing}
                    label="Gesture Drawing"
                    onChange={(value) =>
                      handleToggleChange("gestureDrawing", value)
                    }
                  />
                </Field>

                <Field orientation="horizontal">
                  <RoutineItem
                    checked={editedRecord.construction}
                    label="Construction"
                    onChange={(value) =>
                      handleToggleChange("construction", value)
                    }
                  />
                </Field>

                <Field orientation="horizontal">
                  <RoutineItem
                    checked={editedRecord.targetedPractice}
                    label="Targeted Practice"
                    onChange={(value) =>
                      handleToggleChange("targetedPractice", value)
                    }
                  />
                </Field>
              </FieldGroup>
            </div>
          )}

          <div className="flex gap-3 ml-auto">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={saving}
            >
              Cancel
            </Button>

            <Button onClick={handleSave} disabled={saving || !editedRecord}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
