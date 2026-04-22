"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => signOut({ callbackUrl: "/auth" })}
      aria-label="Log out"
      title="Log out"
    >
      <LogOut className="h-5 w-5" />
    </Button>
  );
}
