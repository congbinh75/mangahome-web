import { ReactNode } from "react";
import { SidebarProvider } from "../ui/sidebar";
import { CustomSidebar } from "./components/sidebar";
import { Header } from "./components/header";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Readonly<Props>) {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
