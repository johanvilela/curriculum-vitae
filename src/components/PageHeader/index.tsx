import { ModeToggle } from "@/components/ModeToggle";
import { Avatar } from "@/components/Avatar";
import { TypographyH1 } from "../Typography/TypographyH1";

export function PageHeader() {
  return (
    <div className="mt-6 flex justify-between print:mt-0">
      <div className="flex">
        <div className="print:hidden">
          <Avatar />
        </div>
        <div className="ml-2 self-center print:ml-0">
          <TypographyH1>Johan Vilela</TypographyH1>
        </div>
      </div>
      <div className="hide-on-print">
        <ModeToggle />
      </div>
    </div>
  );
}
