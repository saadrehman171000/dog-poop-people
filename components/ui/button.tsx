import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#65C22E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF8E6] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#65C22E] text-[#073516] shadow-[0_18px_50px_rgba(101,194,46,0.35)] hover:-translate-y-0.5 hover:bg-[#76d63c]",
        secondary:
          "border border-white/35 bg-white/12 text-white shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/20",
        outline:
          "border border-[#0F5A24]/15 bg-white text-[#0F5A24] shadow-sm hover:-translate-y-0.5 hover:border-[#65C22E]/50 hover:bg-[#FFF8E6]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
