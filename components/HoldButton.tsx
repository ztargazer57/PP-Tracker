"use client";
import "@/lib/animation.css";
import { useState, useRef } from "react";

type RoutineItemProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export default function RoutineItem({
  label,
  checked,
  onChange,
}: RoutineItemProps) {
  const [done, setDone] = useState(checked);
  const [holding, setHolding] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const HOLD_DURATION = 1300;

  const startHold = () => {
    setHolding(true);

    timerRef.current = setTimeout(() => {
      setDone((prev) => !prev);
      onChange(!checked);
      setHolding(false);
    }, HOLD_DURATION);
  };

  const cancelHold = () => {
    setHolding(false);
    timerRef.current && clearTimeout(timerRef.current);
  };

  return (
    <div className="flex w-full justify-center items-center gap-2 sm:gap-7">
      <div
        onMouseDown={startHold}
        onMouseUp={cancelHold}
        onMouseLeave={cancelHold}
        onTouchStart={startHold}
        onTouchEnd={cancelHold}
        className={`routine-item ${done ? "done" : ""} ${holding ? "holding" : ""}`}
      >
        <span>{label}</span>
        {done ? (
          <div className="progressOut" />
        ) : (
          <div className="progressIn" />
        )}
      </div>
      <div className={`checkbox ${done ? "done" : ""}`} />
    </div>
  );
}
