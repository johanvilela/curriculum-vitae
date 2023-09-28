import { ReactNode } from "react";

export function TypographyA({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="font-medium text-primary underline underline-offset-4"
    >
      {children}
    </a>
  );
}
