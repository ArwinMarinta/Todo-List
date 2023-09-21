// import { useState } from "react";
import Editing from "../assets/edit.svg";
import Delete from "../assets/delete2.svg";
import PropTypes from "prop-types";
// import { filterTask } from "./FilterList";
// import {Task} from "../components/TaskList"

const ToDoForm = ({
  tasks,
  onDeleteTask,
  onToggleComplate,
  onEditeTodo,
  // show,
  // onFilterTask,
}) => {
  // const visibleElement = onFilterTask(tasks, show);
  return (
    <>
      <form className=" flex flex-col mt-10 gap-4">
        {tasks.map((list) => (
          <div key={list.id}>
            <div className="border-2 h-10 flex justify-between items-center font-bold rounded-md">
              <h2
                className="ml-10"
                style={
                  list.complete
                    ? { textDecoration: "line-through", color: "red" }
                    : {}
                }
              >
                {list.task}
              </h2>

              <div className="mr-10 flex items-center gap-8">
                <input
                  type="checkbox"
                  className="h-14 cursor-pointer"
                  onChange={() => onToggleComplate(list.id)}
                  checked={list.complete}
                ></input>

                <button type="button" onClick={() => onEditeTodo(list.id)}>
                  <img src={Editing} />
                </button>

                <button onClick={() => onDeleteTask(list.id)}>
                  <img className="h-6" src={Delete} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

ToDoForm.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onToggleComplate: PropTypes.func,
  // search: PropTypes.func,
  onEditeTodo: PropTypes.func,
  show: PropTypes.array,
  // filterTask: PropTypes.array,
  // show: PropTypes.string,
  // onFilterTask: PropTypes.func,
};

export default ToDoForm;
