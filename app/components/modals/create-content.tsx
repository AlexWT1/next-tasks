"use client";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const CreateContent: React.FC<Props> = ({ className }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [completed, setCompleted] = React.useState(false);
  const [important, setImportant] = React.useState(false);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
      important,
    };

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      toast.success("Task created successfully!");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <h1>Create a Task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange("title")}
          placeholder="Title"
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={4}
          value={description}
          onChange={handleChange("description")}
          placeholder="Description"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="descridateption"
          value={date}
          onChange={handleChange("date")}
        />
      </div>
      <div className="input-control">
        <label htmlFor="completed">Toggle Completed</label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          value={completed.toString()}
          onChange={handleChange("completed")}
        />
      </div>
      <div className="input-control">
        <label htmlFor="important">Toggle Important</label>
        <input
          type="checkbox"
          name="important"
          id="important"
          value={important.toString()}
          onChange={handleChange("important")}
        />
      </div>
      <div className="submit">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
