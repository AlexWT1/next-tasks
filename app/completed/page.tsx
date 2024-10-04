"use client";

import React from "react";
import { useGlobalState } from "../context/global-provider";
import { Tasks } from "../components/tasks/tasks";

interface Props {
  className?: string;
}

const CompletedPage: React.FC<Props> = ({ className }) => {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};

export default CompletedPage;
