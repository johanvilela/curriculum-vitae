import { ThemeProvider } from "@/context/ThemeProvider/theme-provider";
import { PageHeader } from "@/components/PageHeader";
import { PageContent } from "@/components/PageContent";
import { PageFooter } from "./components/PageFooter";

export function App() {
  const pageSize = "max-w-[44rem]";

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-max justify-center">
        <div className={`${pageSize} flex w-full flex-1 flex-col px-4 sm:px-0`}>
          <PageHeader />
          <PageContent />
          <PageFooter />
        </div>
      </div>
    </ThemeProvider>
  );
}
