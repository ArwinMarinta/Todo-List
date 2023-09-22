// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import InputTodo from "./pages/InputTodo";
import { useState, useEffect } from "react";
import Data from "./data.json";

localStorage.setItem("userData", JSON.stringify(Data));

const getLocalStorage = () => {
  let Data = localStorage.getItem("Data");
  if (Data) {
    return (Data = JSON.parse(localStorage.getItem("Data")));
  } else {
    return [];
  }
};
function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(task));
  }, [task]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              text={text}
              task={task}
              setText={setText}
              setTask={setTask}
            />
          }
        />
        <Route
          path="/input"
          element={
            <InputTodo
              text={text}
              task={task}
              setText={setText}
              setTask={setTask}
            />
          }
        />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
