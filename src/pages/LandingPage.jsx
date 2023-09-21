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

  const handleChangeFilter = (item) => {
    setShow(item);
  };

  //Todo Search
  // const onSearchChange = (event) => {
  //   event.preventDefault();
  //   setTask(event);
  // };
  // const search = (items, str) => {
  //   if (str) {
  //     return items.filter((item) => {
  //       return item.label.toLowerCase().indexOf(str.toLowerCase()) > -1;
  //     });
  //   }
  //   return items;
  // };

  // const handleSearch = (event) => {
  //   const value = event.target.value;
  //   setTask((item) => {
  //     return item.filter((item) =>
  //       item.toLowerCase().includes(value.toLowerCase)
  //     );
  //   });
  // };

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

  //Fungsi untuk menghapus show
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
    setTask((task) =>
      task.map((tasks) =>
        tasks.id === id ? { ...tasks, complete: !tasks.complete } : tasks
      )
    );
  };

  // const handleAll = () => {
  //   window.location.reload(true);
  // };

  // const handleDone = () => {
  //   setTask(task.filter((tasks) => tasks.complete == true));
  // };
  // const handleTodo = () => {
  //   setTask(task.filter((tasks) => tasks.complete == false));
  // };

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
