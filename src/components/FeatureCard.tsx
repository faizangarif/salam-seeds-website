import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

export function FeatureCard({ icon, title, children, className }: FeatureCardProps) {
  return (
    <div className={cn("card p-6", className)}>
      <div className="flex items-start gap-3">
        <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-text">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-base font-extrabold">{title}</div>
          <div className="text-sm text-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}
