"use client";

import { Field, FieldGroup } from "./ui/field";
import RoutineItem from "./HoldButton";
import { fetchDailyRoutineStatus, fetchDailyRoutineUpdate } from "@/lib/system";
import { useEffect, useState } from "react";

export default function DailyRoutineWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetchDailyRoutineStatus();
      setData(res);
    }
    loadData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const handleChange = async (
    field: string,
    value: boolean | "indeterminate"
  ) => {
    const checked = value === true;

    setData((prev: any) => ({
      ...prev,
      [field]: checked,
    }));

    await fetchDailyRoutineUpdate(field, checked);

    // notify other components like Streak
    window.dispatchEvent(new Event("daily-routine-updated"));
  };

  return (
    <div className="min-w-60 w-80 mx-auto sm:w-80 md:w-100 lg:w-70">
      <h1 className="text-2xl text-center">Daily Routine</h1>
      <FieldGroup className="mt-5 gap-3">
        <Field orientation="horizontal">
          <RoutineItem
            checked={data.gestureDrawing}
            label="Gesture Drawing"
            onChange={(value) => handleChange("gestureDrawing", value)}
          />
        </Field>

        <Field orientation="horizontal">
          <RoutineItem
            checked={data.construction}
            label="Construction"
            onChange={(value) => handleChange("construction", value)}
          />
        </Field>

        <Field orientation="horizontal">
          <RoutineItem
            checked={data.targetedPractice}
            label="Targeted Practice"
            onChange={(value) => handleChange("targetedPractice", value)}
          />
        </Field>
      </FieldGroup>
    </div>
  );
}
