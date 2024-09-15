import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks);
  };

  return (
    <>
      <Header setTasks={setTasks}></Header>
      <Main tasks={tasks} handleDelete={handleDelete}></Main>
    </>
  );
}

export default App;
