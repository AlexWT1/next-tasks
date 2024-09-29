"use client";

import React from "react";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

export const TaskItem: React.FC<Props> = ({
  title,
  description,
  date,
  isCompleted,
  id,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{date}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button className="completed">Completed</button>
        ) : (
          <button className="incompleted">Incompleted</button>
        )}
      </div>
    </div>
  );
};
