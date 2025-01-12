import { TabBar } from "./navigation/tab-bar";

interface MobileContainerProps {
  children: React.ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#E2EFF0]">
      <div className="w-full max-w-[360px] h-[672px] bg-background rounded-[60px] shadow-xl overflow-hidden relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[34px] bg-black rounded-b-[20px]" />
        <main className="h-[calc(100%-124px)] mt-[34px] overflow-y-auto">
          {children}
        </main>
        <TabBar />
      </div>
    </div>
  );
}
