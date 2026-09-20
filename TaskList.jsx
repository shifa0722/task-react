import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { employee: "Shifa", name: "Task 1", status: "done" },
    { employee: "Rahul", name: "Task 2", status: "not done" },
    { employee: "Priya", name: "Task 3", status: "done" }
  ]);

  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];

    if (updatedTasks[index].status === "done") {
      updatedTasks[index].status = "not done";
    } else {
      updatedTasks[index].status = "done";
    }

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Employee Task Management</h1>

      {tasks.map((task, index) => (
        <div key={index}>
          <h3>Employee Name: {task.employee}</h3>
          <p>Task: {task.name}</p>
          <p>Status: {task.status}</p>

          <button onClick={() => toggleStatus(index)}>
            Toggle Status
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default TaskList;