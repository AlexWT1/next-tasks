"use client";

import React from "react";
import { useGlobalState } from "../context/global-provider";
import { Tasks } from "../components/tasks/tasks";

interface Props {
  className?: string;
}

const IncompletePage: React.FC<Props> = ({ className }) => {
  const { incompletedTasks } = useGlobalState();

  return <Tasks title="Incomplete Tasks" tasks={incompletedTasks} />;
};

export default IncompletePage;
