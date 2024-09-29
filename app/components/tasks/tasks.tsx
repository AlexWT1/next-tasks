"use client";

import { useGlobalState } from "@/app/context/global-provider";
import React from "react";
import styled from "styled-components";
import { CreateContent } from "../modals/create-content";

interface Props {
  className?: string;
}

export const Tasks: React.FC<Props> = ({ className }) => {
  const { theme } = useGlobalState();
  return (
    <TaskStyled theme={theme}>
      <CreateContent />
    </TaskStyled>
  );
};

const TaskStyled = styled.main`
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
