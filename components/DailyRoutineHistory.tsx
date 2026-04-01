"use client";
import { useState } from "react";

export async function DailyRoutineHistory() {
const [data, setData] = useState<any>(null);
    return (
    <div>
      <h2>Daily Routine History</h2>
      <p>This is where the daily routine history will be displayed.</p>
    </div>
  );
}
