import { ReactNode } from "react";

export function TypographyP({ children }: { children: ReactNode }) {
  return (
    <p className="text-justify leading-7 transition-colors print:text-black print:dark:text-black [&:not(:first-child)]:mt-3 ">
      {children}
    </p>
  );
}
