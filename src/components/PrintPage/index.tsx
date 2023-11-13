import { Button, ButtonProps } from "@/components/ui/button";
import { useEffect } from "react";
import { FileTextIcon as FileText } from "@radix-ui/react-icons";

export const PrintPage = (props: ButtonProps) => {
  function handlePrint() {
    window.print();
  }

  function verifyIfMustPrint() {
    const mustPrint = Boolean(localStorage.getItem("currentTheme"));
    if (mustPrint) window.print();
  }

  useEffect(() => {
    verifyIfMustPrint();
  }, []);
  return (
    <Button variant="ghost" size="icon" {...props} onClick={handlePrint}>
      <FileText className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
};
