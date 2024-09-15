import Tasks from "../Tasks/Tasks";
import task1 from "../../assets/direct-hit.png";
import task2 from "../../assets/glowing-star.png";
import task3 from "../../assets/check-mark-button.png";

const Main = ({ tasks, handleDelete }) => {
  // console.log(tasks);

  return (
    <div className="flex gap-8 justify-evenly mt-10 py- px-4 w-11/12 mx-auto">
      <Tasks
        taskIcon={task1}
        title="To Do"
        tasks={tasks}
        status="todo"
        handleDelete={handleDelete}
      ></Tasks>
      <Tasks
        taskIcon={task2}
        title="Doing"
        tasks={tasks}
        status="doing"
        handleDelete={handleDelete}
      ></Tasks>
      <Tasks
        taskIcon={task3}
        title="Done"
        tasks={tasks}
        status="done"
        handleDelete={handleDelete}
      ></Tasks>
    </div>
  );
};

export default Main;
