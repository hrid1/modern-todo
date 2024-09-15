import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const Tasks = ({ taskIcon, title, tasks, status, handleDelete }) => {
  // console.log(tasks);
  return (
    <div className="w-full">
      <h2 className="flex gap-2 font-bold text-lg mb-4">
        <img className="w-6" src={taskIcon} alt="" />
        {title}
      </h2>

      {/* <TaskCard></TaskCard> */}
      {tasks.map(
        (task, idx) =>
          task.status == status && (
            <TaskCard
              key={idx}
              title={task.task}
              tags={task?.tags}
              handleDelete={handleDelete}
              index={idx}
            ></TaskCard>
          )
      )}
    </div>
  );
};

export default Tasks;
