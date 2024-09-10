import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const Tasks = ({ taskIcon, title }) => {
  return (
    <div className="w-full">
      <h2 className="flex gap-2 font-bold text-lg mb-4">
        <img className="w-6" src={taskIcon} alt="" />
        {title}
      </h2>

      {/* task card */}
      <TaskCard></TaskCard>
    </div>
  );
};

export default Tasks;
