"use client"

import { useState } from "react"

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative w-full bg-black px-4 py-3 flex items-center justify-between overflow-hidden">

      {/* 🌫️ subtle top shine */}
      <div className="pointer-events-none absolute inset-0 opacity-20
        bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),transparent_40%)]"
      />

      {/* 🧊 bottom border glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[1px]
        bg-white/10"
      />

      {/* 🧠 TITLE */}
      <h1
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={() => setExpanded((prev) => !prev)}
        className="relative cursor-pointer font-semibold tracking-wide text-sm sm:text-base select-none"
      >
        {/* SHORT VERSION */}
        <span
          className={`
            absolute left-0 top-0 transition-all duration-500 ease-in-out
            ${expanded ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"}
          `}
        >
          <span className="text-amber-500">PP</span>
          <span className="text-white">Tracker</span>
        </span>

        {/* EXPANDED VERSION */}
        <span
          className={`
            transition-all duration-500 ease-in-out
            ${expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          <span className="text-amber-500">PersonalProgress</span>
          <span className="text-white">Tracker</span>
        </span>
      </h1>

      {/* (optional placeholder right side) */}
      <div className="w-6 h-6" />
    </div>
  )
}
