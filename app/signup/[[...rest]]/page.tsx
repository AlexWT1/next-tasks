"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

interface Props {
  className?: string;
}

const SignupPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SignUp />
    </div>
  );
};

export default SignupPage;
