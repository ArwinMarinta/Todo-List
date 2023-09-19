import { useState, useEffect } from "react";
import ToDoInput from "../components/ToDoInput";
import TodoForm from "../components/ToDoForm";
// import ListTasks from "../components/ToDoData";
import Data from "../data.json";
// import { Input } from "postcss";
// import TodoDatab from "./components/ToDoData"
// import { ListTasks } from "../src/components/ToDoData";
// import ToDoList from "./components/ToDoList";
// import { useImmerReducer } from "use-immer";\
import ToDoSearch from "../components/ToDoSearch";

function LandingPage() {
  const [task, setTask] = useState(Data);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(task);
  }, [task]);

  // const [text, setText] = useState("");
  const handleInput = (e) => {
    e.preventDefault();

    setTask([
      ...task,
      {
        id: task.length + 1,
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

  const handleToggle = (id) => {
    setTask((task) =>
      task.map((tasks) =>
        tasks.id === id ? { ...tasks, checked: !tasks.checked } : tasks
      )
    );
  };

  return (
    <>
      <div className=" mx-auto px-10 w-full ">
        <div className="mt-4 w-full">
          <ToDoInput onAddTask={handleInput} onChange={handleChange} />
        </div>
        <div className="mt-10">
          <ToDoSearch />
        </div>
        <TodoForm
          onDeleteTask={deleteTask}
          tasks={task}
          onToggleComplate={handleToggle}
        />
        <div className="mt-10"></div>
      </div>
    </>
  );
}

export default LandingPage;
