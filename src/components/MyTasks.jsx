import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskTile from "./TaskTile";
import AddTask from "./AddTasks";

export default function MyTasks() {
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);
  const [authorizated, setAuthorizated] = useState(false);
  const token = localStorage.getItem("token");
  const refreshtoken = localStorage.getItem("refreshtoken");
  async function refreshAccessToken() {
    console.log("refreshToken:" + refreshtoken);
    const response = await fetch(
      "http://localhost:3000/api/user/refreshToken",
      {
        headers: {
          Authorization: refreshtoken,
        },
      }
    );
    console.log("Statusss" + response.status);
    if (response.status == 401) {
      navigate("/login");
    } else {
      response
        .json()
        .then((json) => localStorage.setItem("token", json.token))
        .catch((error) => console.error(error));
      // window.location.reload();
    }
  }
  useEffect(() => {
    console.log(token);
    if (!token) {
      navigate("/login");
      if (!refreshtoken) {
        console.log("s");
      } else {
        console.log("refrwshingtoken");
        refreshAccessToken().then(() => navigate("/"));
      }
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/api/todo/getIndividualUserTodoTasks",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status == 401) {
        refreshAccessToken().then(() => console.log("refreshed"));
        navigate("/login");
      } else {
        response
          .json()
          .then((json) => setTaskList(json))
          .catch((error) => console.error(error));
        setAuthorizated(true);
      }
    }
    fetchData();
  }, [authorizated]);

  function logOut() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return authorizated ? (
    <div className="">
      <button
        onClick={logOut}
        className="absolute top-0 right-0 h-16 w-16 mx-10"
      >
        Logout
      </button>
      <AddTask />
      <h1 className="my-10 text-xl font-bold">My Tasks</h1>
      {taskList.map((task, key) => (
        <TaskTile key={key} task={task} />
      ))}
    </div>
  ) : (
    <h1>401</h1>
  );
}
