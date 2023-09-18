import { useState } from "react";
import ToDoInput from "../components/ToDoInput";
import TodoForm from "../components/ToDoForm";
import ListTasks from "../components/ToDoData";
// import { Input } from "postcss";
// import TodoDatab from "./components/ToDoData"
// import { ListTasks } from "../src/components/ToDoData";
// import ToDoList from "./components/ToDoList";
// import { ToDoSearch } from "./components/ToDoSearch";
// import { useImmerReducer } from "use-immer";

function LandingPage() {
  const [task, setTask] = useState(ListTasks);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // const [text, setText] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    const id = task.length + 1;
    console.log(task);
    setTask([
      ...task,
      {
        id: id,
        task: text,
        complete: false,
      },
    ]);
    setText("");
    console.log(task);
  };

  const deleteTask = (id) => {
    setTask(task.filter((tasks) => tasks.id !== id));
  };

  return (
    <>
      <div className=" mx-auto px-10 w-full ">
        <div className="mt-4 w-full">
          <ToDoInput onAddTask={handleInput} onChange={handleChange} />
        </div>
        {/* <div className="mt-10">
        <ToDoSearch />
      </div> */}
        <TodoForm onDeleteTask={deleteTask} tasks={task} />
        <div className="mt-10"></div>
      </div>
    </>
  );
}

export default LandingPage;
