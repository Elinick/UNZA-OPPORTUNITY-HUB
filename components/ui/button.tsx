import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// One Button for the whole app, in shadcn/ui style.
// - "primary" = main action (green, filled)
// - "secondary" = quieter action (outlined)
// - "ghost" = text-only, for nav and small actions
// Every size keeps a minimum 44px height so it is easy to tap on a phone.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-ink hover:opacity-90",
        secondary: "border border-line bg-card text-ink hover:bg-background",
        ghost: "text-ink hover:bg-line/50",
      },
      size: {
        md: "min-h-11 px-4 text-sm",
        lg: "min-h-12 px-6 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // asChild lets the Button style a <Link> or <a> instead of rendering a <button>.
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
