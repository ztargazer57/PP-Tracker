import type { ReactNode } from "react";
import FloatingSidebar from "@/components/FloatingSidebar";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-128px)]">
      <FloatingSidebar />

      <Navbar />

      <main className=" px-4 pb-18 lg:px-50 lg:pb-6">
        {children}
      </main>
    </div>
  );
}
