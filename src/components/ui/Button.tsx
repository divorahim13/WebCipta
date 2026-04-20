import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
          {
            "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm hover:shadow": variant === "default",
            "border border-[var(--color-muted)]/30 bg-transparent hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)]": variant === "outline",
            "hover:bg-[var(--color-muted)]/10 hover:text-[var(--color-foreground)]": variant === "ghost",
            "text-[var(--color-accent)] font-medium underline-offset-4 hover:underline": variant === "link",
            "h-11 px-6 py-2": size === "default",
            "h-9 rounded-md px-4 text-xs font-medium": size === "sm",
            "h-12 rounded-xl px-10 text-base": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
