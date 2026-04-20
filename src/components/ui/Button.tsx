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
          "inline-flex items-center justify-center whitespace-nowrap rounded-[1px] text-[13px] font-bold tracking-[0.08em] uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-[var(--color-accent)] text-white hover:bg-[#18233C] hover:shadow-[0_4px_12px_rgba(15,23,42,0.15)]": variant === "default",
            "border border-gray-200 bg-transparent hover:border-gray-300 hover:bg-gray-50 text-[#18181A] shadow-[0_2px_4px_rgba(0,0,0,0.02)]": variant === "outline",
            "hover:bg-gray-100/50 text-[#52525B] hover:text-[#18181A]": variant === "ghost",
            "text-[#18181A] font-bold underline underline-offset-4 decoration-2 decoration-[var(--color-highlight)] hover:text-[var(--color-highlight)] transition-colors": variant === "link",
            "h-12 px-8 py-3": size === "default",
            "h-10 px-5 text-[11px]": size === "sm",
            "h-14 px-10 text-[14px]": size === "lg",
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
