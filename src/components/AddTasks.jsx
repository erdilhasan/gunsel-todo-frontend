import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddTask(params) {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3000/api/todo/create",
      requestOptions
    );
    const res = await response.status;
    if (res == 200) {
      window.location.reload();
    }
    alert(res);
  };

  return (
    <div className="">
      <h1 className="text-start">Add Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-10 border border-slate-500 rounded-lg bg-slate-800 w-fit space-y-5 ">
          <label className="flex justify-between ">
            Title
            <input
              {...register("title")}
              className="flex mx-2 rounded-lg bg-slate-400"
            ></input>
          </label>

          <label className="flex justify-between ">
            Description
            <input
              {...register("description")}
              className="mx-2 rounded-lg bg-slate-400"
            ></input>
          </label>
          <button className="bg-slate-500 p-2 rounded-lg border">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
