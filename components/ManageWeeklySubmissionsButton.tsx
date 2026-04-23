"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

export function ManageWeeklySubmissionsButton() {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => router.push("/weeklySubmissions/manage")}
      className="gap-2 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
    >
      <Settings2 className="h-4 w-4" />
      Manage
    </Button>
  );
}
