"use client";

import { useGlobalState } from "@/app/context/global-provider";
import React from "react";
import styled from "styled-components";
import { CreateContent } from "../modals/create-content";
import { TaskItem } from "../task-item/task-item";

interface Props {
  title: string;
  tasks: any[];
}

export const Tasks: React.FC<Props> = ({ title, tasks }) => {
  const { theme } = useGlobalState();
  return (
    <TaskStyled theme={theme}>
      <h1>{title}</h1>
      <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={{ ...task }} />
        ))}
      </div>
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
