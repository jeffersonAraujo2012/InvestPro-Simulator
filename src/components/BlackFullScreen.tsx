import { ReactNode } from "react";

interface IBlackFullScreen {
  children?: ReactNode;
}

export default function BlackFullScreen({ children }: IBlackFullScreen) {
  return (
    <div className="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-20">
      {children}
    </div>
  );
}
