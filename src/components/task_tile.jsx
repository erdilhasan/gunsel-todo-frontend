export default function TaskTile() {
  return (
    <div className="border-2 rounded-md justify-start items-start text-start p-5 ">
      <h1>Title</h1>
      <h2>description</h2>
      <label htmlFor="">Completed</label>
      <input type="checkbox" />
    </div>
  );
}
