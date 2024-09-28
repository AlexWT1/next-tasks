"use client";

import React from "react";

interface Props {
  className?: string;
}

const IncompletePage: React.FC<Props> = ({ className }) => {
  return <div className={className}>Incomplete</div>;
};

export default IncompletePage;
