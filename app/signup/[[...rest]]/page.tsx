"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

interface Props {
  className?: string;
}

const SignupPage: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp />
    </div>
  );
};

export default SignupPage;
