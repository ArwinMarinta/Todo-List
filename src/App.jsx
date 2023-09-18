// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
// import InputTodo from "./pages/InputTodo";
// import EditeTodo from "./pages/EditeTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/input" element={<InputTodo />} /> */}
        {/* <Route path="/edite" element={<EditeTodo />} /> */}
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
