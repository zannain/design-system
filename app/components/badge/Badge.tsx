import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  ["flex", "items-center", "border-2", "rounded-full", "w-fit"],
  {
    variants: {
      intent: {
        neutral: ["text-neutral", "border-neutral-light", "bg-grey"],
        error: ["text-error-dark", "border-error", "bg-error-light"],
        warning: ["text-warning-dark", "border-warning", "bg-warning-light"],
        success: ["text-success-dark", "border-success", "bg-success-light"],
        brand: ["text-brand-dark", "border-brand", "bg-brand-light"],
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
export interface BadgeProps extends VariantProps<typeof badgeVariants> {}
export default function Badge({ intent, size }: BadgeProps) {
  return <div className={badgeVariants({ intent, size })}>Label</div>;
}
