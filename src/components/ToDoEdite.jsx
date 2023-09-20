// import React from 'react'
import Update from "../assets/update.svg";
import { Link } from "react-router-dom";

const ToDoEdite = () => {
  return (
    <form>
      <h1 className="mb-10 font-bold text-3xl">Todo Search</h1>
      <div id="ToDoInput" className="border-2 border-abu  ">
        <div className="flex flex-col gap-4 mx-auto px-10 py-10 w-full">
          <div className="flex flex-row h-10 w-[80%] self-center">
            <img src={Update} className="h-10 bg-blue-600 "></img>
            <input
              placeholder="  Edite Todo"
              className="bg-white w-full rounded-r-md border-2 border-border"
            />
          </div>
          <div className="flex flex-row gap-10 ">
            <button className="bg-blue-600 rounded-md w-[60%] h-10 text-white border-abu border-2 ">
              save
            </button>
            <Link
              className="bg-blue-600 rounded-md w-[60%] h-10 text-white border-abu border-2 "
              as={Link}
              to="/"
            >
              <button>Back</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ToDoEdite;
