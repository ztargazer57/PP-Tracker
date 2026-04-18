import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        // BASE (keep dark)
        "group/card relative flex flex-col gap-4 overflow-hidden rounded-xl py-4 text-sm",
        "bg-card text-card-foreground ring-1 ring-foreground/10",

        // 🌑 DIAGONAL DARK GRADIENT LAYER
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(0,0,0,0.6))]",

        // 🧠 depth
        "shadow-[0_10px_30px_rgba(0,0,0,0.45)]",

        // variants
        "data-[size=sm]:gap-3 data-[size=sm]:py-3",

        "*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",

        className
      )}
      {...props}
    >
      {/* ✨ SHARP DIAGONAL SHINE (main highlight) */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-30
          bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%)]
        "
      />

      {/* 🌫️ DARK CONTRAST LAYER (makes shine pop more) */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(135deg,rgba(0,0,0,0.4),transparent_40%,rgba(0,0,0,0.6))]
        "
      />

      {/* 💡 TOP EDGE LIGHT (subtle, not flashy) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-[1px]
          bg-white/20
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col gap-4">
        {props.children}
      </div>
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
