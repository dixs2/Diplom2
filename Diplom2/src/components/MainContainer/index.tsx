import { ReactNode } from "react";

import "./index.css";

interface MainContainer {
  children?: ReactNode;
}

export default function MainContainer({ children }: MainContainer) {
  return <div className="main-container">{children}</div>;
}
