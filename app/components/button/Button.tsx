import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(["flex", "rounded"], {
  variants: {
    intent: {
      primary: ["text-white", "bg-brand-dark", "hover:bg-brand-emphasize"],
      secondary: [
        "text-neutral-dark",
        "bg-white",
        "border-neutral-light",
        "border-2",
        "drop-shadow-md",
        "hover:bg-neutral-emphasize",
      ],
      tertiary: ["text-brand-dark", "bg-white", "hover:bg-neutral-emphasize"],
      link: ["bg-white", "hover:text-brand-emphasize", "text-brand-dark"],
      destructive: ["text-white", "bg-error-dark", "hover:bg-error-emphasize"],
    },
    size: {
      medium: ["text-sm", "px-3.5", "py-2.5"],
      large: ["text-lg", "px-4", "py-2.5"],
      xl: ["text-lg", "px-5", "py-3"],
      xxl: ["text-xxl", "px-6", "py-4"],
    },
  },
  defaultVariants: {
    intent: "link",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ intent, size, ...rest }, ref) => {
    return (
      <button className={buttonVariants({ intent, size })} {...rest} ref={ref}>
        Button CTA
      </button>
    );
  }
);

export { Button };
