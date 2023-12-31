import { ReactNode } from "react";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight transition-colors print:text-black print:dark:text-black ">
      {children}
    </h1>
  );
}
