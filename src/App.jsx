import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import AllTasks from "./components/AllTasks.jsx";
import MyTasks from "./components/MyTasks.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Layout />}>*/}

          <Route index element={<MyTasks />} />
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="register" element={<RegisterForm />}></Route>
          <Route path="alltasks" element={<AllTasks />}></Route>
          <Route path="mytasks" element={<MyTasks />}></Route>

          <Route path="*" element={<h1>404 No Page Found</h1>} />
          {/* </Route> Closing Tag for layout*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
