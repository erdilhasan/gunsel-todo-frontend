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
  function deleteTask(params) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:3000/api/todo/delete?todoId=" + task._id,
      requestOptions
    ).then(() => window.location.reload());
  }

  return (
    <div className="">
      <div className="border-2 border-slate-800 rounded-md justify-between items-start text-start p-5 my-4 flex bg-slate-700">
        <div>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
          <label htmlFor="">Completed </label>
          <input onClick={toggle} checked={task.isComplete} type="checkbox" />
        </div>

        <button
          onClick={deleteTask}
          className="border rounded-md p-1 h-min align-middle my-auto bg-slate-800"
        >
          Delete
        </button>
      </div>{" "}
    </div>
  );
}
