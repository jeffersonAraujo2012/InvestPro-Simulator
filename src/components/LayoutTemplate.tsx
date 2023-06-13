import { ReactNode } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface ILayoutTemplate {
  children: ReactNode;
  headerTitle: string;
}

export default function LayoutTemplate({
  children,
  headerTitle,
}: ILayoutTemplate) {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      <SideMenu />

      <div className="w-full h-full overflow-x-hidden">
        <Header title={headerTitle} />

        <main className="w-full h-full pt-[6.625rem] pb-4 px-8 bg-[#F8F9FF] overflow-y-scroll overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
