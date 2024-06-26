import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3000/api/user/login",
      requestOptions
    );
    const res = await response.status;
    alert(res);
  };
  return (
    <div className="border-2 border-slate-700 rounded-xl bg-gray-800">
      <h1 className="text-3xl p-8 font-extrabold ">Welcome To Todo App</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              E-mail
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              {...register("email")}
              name="email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="text"
              //  value="name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              {...register("password")}
              name="password"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="password"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </form>
      <button className="p-4" onClick={() => navigate("/register")}>
        Don&apos;t have an account? Click to register
      </button>
    </div>
  );
}
