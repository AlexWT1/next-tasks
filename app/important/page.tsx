"use client";

import React from "react";
import { Tasks } from "../components/tasks/tasks";
import { useGlobalState } from "../context/global-provider";

interface Props {
  className?: string;
}

const ImportantPage: React.FC<Props> = ({ className }) => {
  const { importantTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={importantTasks} />;
};

export default ImportantPage;
