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
          "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] text-sm font-bold tracking-widest uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.99]",
          {
            "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm": variant === "default",
            "border border-[var(--color-muted)]/40 bg-transparent hover:border-[#18181A] text-[#18181A] hover:bg-transparent": variant === "outline",
            "hover:bg-[var(--color-muted)]/5 text-[#52525B] hover:text-[#18181A]": variant === "ghost",
            "text-[var(--color-accent)] font-medium underline-offset-4 hover:underline": variant === "link",
            "h-12 px-8 py-3": size === "default",
            "h-10 px-5 text-[11px]": size === "sm",
            "h-14 px-10 text-sm": size === "lg",
            "h-12 w-12": size === "icon",
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
