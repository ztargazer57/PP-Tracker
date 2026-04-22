import type { ReactNode } from "react";
import FloatingSidebar from "@/components/FloatingSidebar";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <FloatingSidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}
