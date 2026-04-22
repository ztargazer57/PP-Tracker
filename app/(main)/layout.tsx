import type { ReactNode } from "react";
import FloatingSidebar from "@/components/FloatingSidebar";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <FloatingSidebar />

      <Navbar />

      <main className="min-h-[calc(100vh-64px)] px-4 pt-4 pb-18 lg:px-40 lg:pb-6">
        {children}
      </main>
    </div>
  );
}
