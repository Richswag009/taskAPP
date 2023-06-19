const SingleTask = ({
  task: { id, title, completed, description },
  onDelete,
  toggleComplete
}) => {
  return (
    <div
      onDoubleClick={() => toggleComplete(id)}
      className="singleTask__container"
    >
      <div className="">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          Status:{" "}
          <span
            className={`${
              completed ? "status__completed" : "status__notCompleted"
            }`}
          >
            {completed ? "Completed" : "Not Completed"}
          </span>
        </p>
      </div>
      <div className="singleTasK__actions">
        <span onClick={() => onDelete(id)} className="delete">
          x
        </span>
      </div>
    </div>
  );
};
export default SingleTask;
