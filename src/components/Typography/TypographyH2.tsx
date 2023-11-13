import { ReactNode } from "react";

export function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
}
