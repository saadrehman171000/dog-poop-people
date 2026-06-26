import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-2xl border border-[#0F5A24]/12 bg-white/86 px-4 text-sm font-semibold text-[#12321C] shadow-[0_10px_28px_rgba(31,46,35,0.05)] outline-none transition placeholder:text-[#405244]/42 focus:border-[#65C22E]/70 focus:ring-4 focus:ring-[#65C22E]/14 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
