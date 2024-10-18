import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
              default: "bd-primary text-primary-foreground hover:bg-primary/90",
              destructive: "bd-destructive text-destructive-foregaround hover:bg-destructive/90",
              outline: "border border-input hover:bg-accent hober:text-accent-forgeround",
              secodary: "bg-secondary text-secondary-forgeround hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-forgeround",
              link: "underline hover:text-accent-forgeround",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-lg",
            },
        },
        defaultVariants: {
            variant "default"
        }