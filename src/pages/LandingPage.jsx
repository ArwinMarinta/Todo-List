import { useState } from "react";
import ToDoInput from "../components/ToDoInput";
import TodoForm from "../components/ToDoForm";
import Data from "../data.json";
import TodoDelete from "../components/ToDoDelete";
import ToDoSearch from "../components/ToDoSearch";
import TodoList from "../components/ToDoList";
// import filterTask from "../components/FilterList";

function LandingPage() {
  const [task, setTask] = useState(Data);
  const [text, setText] = useState("");
  const [show, setShow] = useState("all");

  const oriTaskData = Data;
  const filterTask = () => {
    if (show === "complete") {
      setTask(oriTaskData.filter((tasks) => tasks.complete === true));
    } else if (show === "uncomplete") {
      setTask(oriTaskData.filter((tasks) => tasks.complete === false));
    } else {
      setTask(oriTaskData);
    }
  };

  const handleChangeFilter = (e) => {
    setShow(e.target.value);
  };

  // const allData = filterTask({ tasks: task, show: "all" });
  // const completeDone = filterTask({ tasks: task, show: "complete" });
  // const completeTodo = filterTask({ tasks: task, show: "uncomplete" });

  const handleEdite = (newTodo) => {
    setTask(task.find((tasks) => tasks.id === newTodo.id));
    task.task = newTodo.task;
    task.done = newTodo.done;
  };

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

  const clearDoneTask = () => {
    setTask(task.filter((tasks) => tasks.complete !== true));
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
            onFilterTask={filterTask}
            onChangeTask={handleChangeFilter}
            // onFilterDone={handleDone}
            // onFilterAll={handleAll}
            // onFilterTodo={handleTodo}
          />
        </div>
        <TodoForm
          onDeleteTask={deleteTask}
          tasks={task}
          onToggleComplate={handleToggle}
          onChangeTodo={handleEdite}
        />
        <div className="mt-10">
          <TodoDelete onClearAll={clearAllData} onClearDone={clearDoneTask} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
