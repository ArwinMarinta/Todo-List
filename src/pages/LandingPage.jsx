import { useState } from "react";
import ToDoInput from "../components/ToDoInput";
import TodoForm from "../components/ToDoForm";
import Data from "../data.json";
import TodoDelete from "../components/ToDoDelete";
import ToDoSearch from "../components/ToDoSearch";
import TodoList from "../components/ToDoList";

function LandingPage() {
  const [task, setTask] = useState(Data);
  const [text, setText] = useState("");
  // const [showDone, setShowDone] = useState(true);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAll = () => {
    setTask([...task]);
  };
  const clearAllData = () => {
    setTask([]);
  };

  const handleDone = () => {
    setTask(task.filter((tasks) => tasks.complete == true));
  };
  const handleTodo = () => {
    setTask(task.filter((tasks) => tasks.complete == false));
  };

  // useEffect(() => {
  //   console.log(task);
  // }, [task]);

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

  const clearDoneTask = (complete) => {
    setTask(task.filter((tasks) => tasks.id != complete));
  };

  const deleteTask = (id) => {
    setTask(task.filter((tasks) => tasks.id !== id));
  };

  const handleToggle = (id) => {
    setTask((task) =>
      task.map((tasks) =>
        tasks.id === id ? { ...tasks, complete: !tasks.complete } : tasks
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
        <div className="mt-10">
          <TodoList
            onFilterDone={handleDone}
            onFilterAll={handleAll}
            onFilterTodo={handleTodo}
          />
        </div>
        <TodoForm
          onDeleteTask={deleteTask}
          tasks={task}
          onToggleComplate={handleToggle}
        />
        <div className="mt-10">
          <TodoDelete onClearAll={clearAllData} onClearDone={clearDoneTask} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
