import { ReactNode } from "react";

interface IDashboardItemContainerProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardItemContainer({
  children,
  className
}: IDashboardItemContainerProps) {
  return (
    <div className={"bg-white rounded-[8px] shadow-[0px_5px_10px_#dde1ff] " + className}>
      {children}
    </div>
  );
}
