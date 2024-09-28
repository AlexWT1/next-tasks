"use client";

import React from "react";

interface Props {
  className?: string;
}

const CompletedPage: React.FC<Props> = ({ className }) => {
  return <div className={className}>Completed</div>;
};

export default CompletedPage;
