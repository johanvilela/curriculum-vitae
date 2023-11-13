import { ReactNode } from "react";

export function TypographyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 scroll-m-20 text-lg font-semibold tracking-tight transition-colors">
      {children}
    </h3>
  );
}
