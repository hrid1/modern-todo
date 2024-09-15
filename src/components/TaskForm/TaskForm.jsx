import { useState } from "react";
import Tag from "../Tag/Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "default",
    tags: [],
  });

  const checkTag = (tag) => {
    // return taskData.tags.some(item => item === tag)
    return taskData.tags.includes(tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      // taskData.tags = [...filterTags];
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      // taskData.tags = [...taskData.tags, tag];
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  // console.log(taskData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // ---------- Type: 1
    setTaskData({ ...taskData, [name]: value });

    // ---------- Type: 2
    // setTaskData((prev) => {
    //   return {...prev, [name]:value}
    // })

    // ---------- Type: 3
    // setTaskData((prev) => ({...prev, [name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "default",
      tags: [],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="md:w-2/5 mx-auto justify-center">
        <input
          className="w-full border p-2 mb-4 rounded-md"
          value={taskData.task}
          name="task"
          type="text"
          placeholder="Enter Your Task"
          onChange={handleChange}
        />

        <div className="flex gap-6 justify-between items-center">
          <div className="flex gap-4">
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            ></Tag>
            <Tag
              tagName={"CSS"}
              selectTag={selectTag}
              selected={checkTag("CSS")}
            ></Tag>
            <Tag
              tagName={"JavaScript"}
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            ></Tag>
            <Tag
              tagName={"React"}
              selectTag={selectTag}
              selected={checkTag("React")}
            ></Tag>
          </div>

          <div className="flex gap-2 ">
            <select
              onChange={handleChange}
              className="border rounded-md px-2"
              name="status"
              value={taskData.status}
              id=""
            >
              <option value="default">+ Add Task</option>
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button
              // onClick={handleSubmit}
              type="submit"
              className="px-4 py-3 bg-violet-600 text-white font-semibold text-lg rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
