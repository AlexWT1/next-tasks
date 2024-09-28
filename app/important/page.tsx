"use client";

import React from "react";

interface Props {
  className?: string;
}

const ImportantPage: React.FC<Props> = ({ className }) => {
  return <div className={className}>Important</div>;
};

export default ImportantPage;
