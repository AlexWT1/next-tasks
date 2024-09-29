"use client";

import { Tasks } from "./components/tasks/tasks";
import { useGlobalState } from "./context/global-provider";

export default function Home() {
  const { tasks } = useGlobalState();
  return <Tasks tasks={tasks} title={""} />;
}
