import { ReactNode } from "react";

export function TypographyUl({ children }: { children: ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}
