import { useEffect, useState } from "react";
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
  const [show, setShow] = useState(task);

  //fungsi untuk melihat all, done dan todo
  const handlefilterTask = (showTodo) => {
    if (showTodo === "all") {
      setShow(filterTask);
    } else if (showTodo === "complete") {
      setShow(filterTask.filter((filters) => filters.complete === true));
    } else if (showTodo === "uncomplete") {
      setShow(filterTask.filter((filters) => filters.complete === false));
    }
  };

  const filterTask = task.filter((tasks) => tasks.task);

  useEffect(() => {
    setShow(task);
  }, [task]);

  const handleEdite = (id) => {
    const newText = prompt("Edit todo:", task[id - 1].task);
    if (newText !== null) {
      const updatedTodos = [...task];
      updatedTodos[id - 1].task = newText;
      setShow(updatedTodos);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  //fungsi untuk menghapus semua Task
  const clearAllData = () => {
    setShow([]);
  };

  //Fungsi untuk menghapus task yang sudah selesai
  const clearDoneTask = () => {
    setShow(show.filter((tasks) => tasks.complete !== true));
  };

  //Fungsi untuk menghapus task
  const deleteTask = (id) => {
    setShow(show.filter((tasks) => tasks.id !== id));
    console.log(show);
  };

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
  };

  const handleToggle = (id) => {
    setShow((show) =>
      show.map((tasks) =>
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
          <TodoList onFilterTask={handlefilterTask} />
        </div>

        <TodoForm
          // search={search}
          onDeleteTask={deleteTask}
          tasks={show}
          onToggleComplate={handleToggle}
          onEditeTodo={handleEdite}
          filterTask={filterTask}
        />

        <div className="mt-10">
          <TodoDelete onClearAll={clearAllData} onClearDone={clearDoneTask} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
