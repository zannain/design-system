import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(["flex"], {
  variants: {
    intent: {
      primary: ["bg-blue"],
      secondary: ["bg-neutral"],
      tertiary: ["bg-white"],
      link: ["bg-white"],
      destructive: ["bg-red"],
    },
    size: {
      medium: ["px-3.5", "py-2.5"],
      large: ["px-4", "py-2.5"],
      xl: ["px-5", "py-3"],
      xxl: ["px-6", "py-4"],
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
        Button
      </button>
    );
  }
);

export { Button };
