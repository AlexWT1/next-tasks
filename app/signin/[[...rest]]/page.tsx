"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

interface Props {
  className?: string;
}

const SigninPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SignIn />
    </div>
  );
};

export default SigninPage;
