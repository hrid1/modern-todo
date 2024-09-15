import Tag from "../Tag/Tag";
import deleteIcon from "../../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  //   console.log(tags);
  return (
    <div className="border shadow-md p-2.5 rounded-md space-y-4">
      {/* {title || <p>This is Sample Text.</p>} */}
     
      <p> {title}</p>
      <section className="flex items-center justify-between">
        <div className="tag-div flex gap-2">
          {tags.map((tag, idx) => (
            <Tag key={idx} tagName={tag} selected></Tag>
          ))}
        </div>
        <button
          onClick={() => {
            handleDelete(index);
          }}
          className="task-delete opacity-60 hover:opacity-100"
        >
          <img className="w-6" src={deleteIcon} alt="" />
        </button>
      </section>
    </div>
  );
};

export default TaskCard;
