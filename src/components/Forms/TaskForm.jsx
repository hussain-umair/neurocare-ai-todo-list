import classes from './TaskForm.module.scss'

const TaskForm = ({ form, handleChange, handleSubmit }) => {

  return (
    <div className={classes.container}>
      {
        Object.entries(form)
        .map(([name, value], index) =>
          <div key={`form-input-${index}`} className={classes.input}>
            {name}
            <input name={name} value={value} onChange={handleChange} placeholder='enter title here'/>
          </div>
        )
      }
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TaskForm
