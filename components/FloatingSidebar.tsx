"use client";

import Link from "next/link";
import {
  LayoutDashboardIcon,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboardIcon, label: "Dashboard", href: "/" },
  { icon: CalendarCheck, label: "Weekly Submissions", href: "/weeklySubmissions" },
  { icon: ClipboardList, label: "Monthly Reviews", href: "/monthlyReviews" },
];

export default function FloatingSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="
          hidden lg:flex
          fixed left-6 top-1/2 -translate-y-1/2
          z-50 flex-col gap-12
        "
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <div key={index} className="group relative flex items-center">
              <Link
                href={item.href}
                className={`
                  relative p-3 rounded-full backdrop-blur
                  transition-all duration-300

                  ${isActive
                    ? `
                      bg-zinc-900 text-white scale-110
                      shadow-[0_8px_25px_rgba(0,0,0,0.5)]
                    `
                    : `
                      bg-zinc-900/70 text-zinc-300
                      hover:bg-zinc-800 hover:scale-110
                    `}
                `}
              >
                {/* 🌫️ subtle top light */}
                <div className="
                  pointer-events-none absolute inset-0 rounded-full opacity-20
                  bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25),transparent_50%)]
                " />

                {/* ✨ diagonal shine */}
                <div className="
                  pointer-events-none absolute inset-0 rounded-full opacity-0
                  group-hover:opacity-40 transition duration-300
                  bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.25),transparent_70%)]
                " />

                {/* 💡 active edge highlight */}
                {isActive && (
                  <div className="
                    pointer-events-none absolute inset-0 rounded-full
                    bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_60%)]
                  " />
                )}

                <Icon size={22} className="relative z-10" />
              </Link>

              {/* LABEL */}
              <span
                className="
                  absolute left-14
                  whitespace-nowrap
                  px-3 py-1
                  rounded-md
                  bg-zinc-900 text-white text-sm

                  opacity-0 translate-x-2
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-200
                  pointer-events-none
                "
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet Bottom Bar */}
      <div
        className="
          lg:hidden
          fixed bottom-4 left-1/2 -translate-x-1/2
          z-50
          flex gap-8
          px-6 py-3
          rounded-full
          bg-zinc-900/80 backdrop-blur
          shadow-[0_10px_30px_rgba(0,0,0,0.5)]
          overflow-hidden
        "
      >
        {/* 🌫️ top shine */}
        <div className="
          pointer-events-none absolute inset-0 opacity-20
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),transparent_50%)]
        " />

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`
                relative p-2 rounded-full transition-all duration-300

                ${isActive
                  ? "bg-zinc-800 text-white scale-110"
                  : "text-zinc-400 hover:bg-zinc-800/70 active:scale-95"}
              `}
            >
              {/* ✨ tiny shine */}
              <div className="
                pointer-events-none absolute inset-0 rounded-full opacity-0
                hover:opacity-40 transition
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)]
              " />

              <Icon size={22} className="relative z-10" />
            </Link>
          );
        })}
      </div>
    </>
  );
}
