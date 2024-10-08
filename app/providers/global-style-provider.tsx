"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export const GlobalStyleProvider = ({ children }: Props) => {
  return (
    <GlobalStyles>
      <Toaster />
      {children}
    </GlobalStyles>
  );
};

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;
