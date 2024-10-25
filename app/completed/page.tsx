'use client';

import React from 'react';
import { useGlobalState } from '../context/global-provider';
import { Tasks } from '../components/tasks/tasks';

const CompletedPage = () => {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};

export default CompletedPage;
