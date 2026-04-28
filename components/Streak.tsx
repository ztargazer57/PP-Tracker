"use client";

import { useCallback, useEffect, useState } from "react";
import {
  fetchDailyRoutineHistory,
  fetchDailyRoutineStatus,
} from "@/lib/system";
import { Button } from "./ui/button";
import { RefreshCcw, RefreshCwOff } from "lucide-react";
import {
  calculateStreak,
  DailyRoutineRecord,
  subscribeToDailyRoutineUpdates,
} from "@/lib/dailyRoutineClient";

export default function Streak() {
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadStreak = useCallback(async (manual = false) => {
    try {
      manual ? setRefreshing(true) : setLoading(true);

      const [today, history] = await Promise.all([
        fetchDailyRoutineStatus(),
        fetchDailyRoutineHistory(),
      ]);

      const records: DailyRoutineRecord[] = [today, ...history];

      setStreak(calculateStreak(records));
    } catch (err) {
      console.error(err);
      setStreak(0);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadStreak();

    return subscribeToDailyRoutineUpdates(() => {
      loadStreak();
    });
  }, [loadStreak]);

  return (
    <div className="flex justify-center items-center gap-5 mt-2">
      <h1 className="text-2xl">Streak:</h1>

      <span className="text-7xl text-orange-400">
        {loading ? "..." : streak}
      </span>

      <Button
        type="button"
        variant="outline"
        onClick={() => loadStreak(true)}
        disabled={refreshing}
      >
        {refreshing ? <RefreshCwOff /> : <RefreshCcw />}
      </Button>
    </div>
  );
}
