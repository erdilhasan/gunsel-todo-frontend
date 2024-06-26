import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Layout />}>*/}

          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="register" element={<RegisterForm />}></Route>

          <Route path="*" element={<h1>404 No Page Found</h1>} />
          {/* </Route> Closing Tag for layout*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
