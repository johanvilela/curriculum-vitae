import { ModeToggle } from "@/components/ModeToggle";
import { Avatar } from "@/components/Avatar";
import { TypographyH1 } from "../Typography/TypographyH1";

export function PageHeader() {
  return (
    <div className="mt-3 flex justify-between">
      <div className="flex">
        <div>
          <Avatar />
        </div>
        <div className="ml-2 self-center">
          <TypographyH1>Johan Vilela</TypographyH1>
        </div>
      </div>
      <div className="hide-on-print">
        <ModeToggle />
      </div>
    </div>
  );
}
