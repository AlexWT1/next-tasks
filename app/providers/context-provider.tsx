"use client";

import React from "react";
import { GlobalProdiver } from "../context/global-provider";

interface Props {
  children?: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return <GlobalProdiver>{children}</GlobalProdiver>;
};
