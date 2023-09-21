import { ThemeProvider } from "@/context/ThemeProvider/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar } from "./components/Avatar";

export function App() {
  const pageSize = "max-w-4xl";
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-max justify-center">
        <div className={`${pageSize} flex flex-1 flex-col`}>
          <div className="mt-3 flex justify-between">
            <div>
              <Avatar />
            </div>
            <div className="hide-on-print">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
