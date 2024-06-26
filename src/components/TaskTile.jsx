export default function TaskTile({ task }) {
  function toggle(params) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:3000/api/todo/toggleTaskComplete?todoId=" + task._id,
      requestOptions
    ).then(() => window.location.reload());
  }

  return (
    <div className="border-2 rounded-md justify-start items-start text-start p-5 ">
      <h1>{task.title}</h1>
      <h2>{task.description}</h2>
      <label htmlFor="">Completed </label>
      <input onClick={toggle} checked={task.isComplete} type="checkbox" />
    </div>
  );
}
