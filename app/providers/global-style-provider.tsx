"use client";

import React from "react";

interface Props {
  className?: string;
}

export const GlobalStyleProvider: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
