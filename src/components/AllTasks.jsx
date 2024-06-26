import { useEffect, useState } from "react";
import TaskTile from "./TaskTile";

export default function AllTasks() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/todo/getAllTodoTasks")
      .then((response) => response.json())
      .then((json) => setTaskList(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>All Tasks</h1>
      {taskList.map((task, key) => (
        <TaskTile key={key} task={task} />
      ))}
    </div>
  );
}
