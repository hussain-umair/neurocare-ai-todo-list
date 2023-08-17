import classes from './Task.module.scss'


const Task = ({ task, updateTask, deleteTask, ...props }) => {
  const { id, isCompleted, title } = task

  return (
    <div className={classes.taskContainer} {...props}>
      <div className={classes.inputTitleContainer}>
        <input type="checkbox" checked={isCompleted} onChange={() => updateTask(id, !isCompleted)}/>
        <p>{title}</p>
      </div>
      <button onClick={() => deleteTask(id)}>delete</button>
    </div>
  )
}

export default Task