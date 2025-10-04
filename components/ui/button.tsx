"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import {
  Button as AriaButton,
  composeRenderProps
} from "react-aria-components";
import { cn } from "utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] text-sm font-medium  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[pressed]:scale-[98%] transition cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-500",

        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-300",
        outline:
          "border border-neutral-300 bg-white hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-300",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-neutral-300",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-300",
        link: "text-neutral-900 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-neutral-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[2px] px-3",
        lg: "min-h-10 h-10 rounded-[2px] px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <AriaButton
      className={composeRenderProps(className, className =>
        cn(
          buttonVariants({
            variant,
            size,
            className
          })
        )
      )}
      {...props}
    />
  );
}
