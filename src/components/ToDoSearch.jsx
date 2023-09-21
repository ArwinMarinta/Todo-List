// import React from "react";
import Search from "../assets/search.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ToDoSearch = ({ onSearchChange, text }) => {
  const handleChange = (e) => {
    onSearchChange(e.currentTarget.value);
  };

  return (
    <form>
      <h1 className="mb-10 font-bold text-3xl">Todo Search</h1>
      <div id="ToDoInput" className="border-2 border-abu  ">
        <div className="flex flex-col gap-4 mx-auto px-10 py-10 w-full">
          <div className="flex flex-row h-10 w-[80%] self-center">
            <img src={Search} className="h-10 bg-blue-600 "></img>
            <input
              type="search"
              placeholder="  Search Todo"
              className="bg-white w-full rounded-r-md border-2 border-border"
              onChange={handleChange}
              value={text}
            />
          </div>
          <div className="flex flex-row gap-10 ">
            <button
              className="bg-blue-600 rounded-md w-[60%] h-10 text-white border-abu border-2 "
              type="submit"
            >
              Search
            </button>

            <Link
              as={Link}
              to="/input"
              className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2 flex items-center justify-center"
            >
              <button type="submit">Add New Task</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

ToDoSearch.propTypes = {
  onSearchChange: PropTypes.func,
  text: PropTypes.string,
};
export default ToDoSearch;
