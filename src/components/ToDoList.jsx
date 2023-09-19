import { PropTypes } from "prop-types";

const ToDoList = ({ onFilterDone, onFilterAll, onFilterTodo }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-4 font-bold text-3xl">Todo List</h1>
        <div className="flex flex-row gap-10">
          <button
            className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2"
            onClick={onFilterAll}
          >
            All
          </button>
          <button
            className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2"
            onClick={onFilterDone}
          >
            Done
          </button>
          <button
            className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2"
            onClick={onFilterTodo}
          >
            Todo
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

ToDoList.propTypes = {
  onFilterDone: PropTypes.func,
  onFilterAll: PropTypes.func,
  onFilterTodo: PropTypes.func,
};

export default ToDoList;
