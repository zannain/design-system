import { cva } from "class-variance-authority";

const badge = cva(
  ["flex", "items-center", "border-2", "rounded-full", "w-fit"],
  {
    variants: {
      intent: {
        neutral: ["text-neutral", "border-neutral-light", "bg-grey-light"],
        error: ["text-red-dark", "border-red", "bg-red-light"],
        warning: ["text-yellow-dark", "border-yellow", "bg-yellow-light"],
        success: ["text-green-dark", "border-green", "bg-green-light"],
        brand: ["text-blue-dark", "border-blue", "bg-blue-light"],
      },
      size: {
        small: ["text-xs", "px-1.5", "py-0.5"],
        medium: ["text-xs", "px-2", "py-0.5"],
        large: ["text-sm", "px-2.5", "py-1"],
      },
    },
    defaultVariants: {
      intent: "neutral",
      size: "medium",
    },
  }
);

export default function Badge({ className, intent, size }) {
  return <div className={badge({ intent, size, className })}>Label</div>;
}
