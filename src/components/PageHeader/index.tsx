import { ModeToggle } from "@/components/ModeToggle";
import { Avatar } from "@/components/Avatar";

export function PageHeader() {
  return (
    <div className="mt-3 flex justify-between">
      <div>
        <Avatar />
      </div>
      <div className="hide-on-print">
        <ModeToggle />
      </div>
    </div>
  );
}
