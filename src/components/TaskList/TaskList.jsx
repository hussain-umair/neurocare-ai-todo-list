import { useState, useMemo, useDeferredValue } from 'react'

import { useTask } from '../../contexts/Tasks'
import { taskFilters } from '../../utils/constants'
import Task from '../Task'
import classes from './TaskList.module.scss'
import Filters from '../Filters'

const filtersFnMap = {
  all: () => true,
  completed: task => task.isCompleted,
  incomplete: task => !task.isCompleted,
}

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useTask()
  const [filter, setFilter] = useState(taskFilters[0])
  const deferredFilter = useDeferredValue(filter)

  const filteredTasks = useMemo(
    () => tasks.filter(filtersFnMap[deferredFilter]),
    [tasks, deferredFilter],
  )

  return (
    <div className={classes.taskListContainer}>
      <Filters filter={filter} filterHandler={filter => setFilter(filter)} />
      {filteredTasks.length
        ? filteredTasks.map((task, index) => (
            <Task
              key={`task-${index}`}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))
        : `No ${
            filter !== 'all' ? filter : ''
          } task available. Try different filter or add a new task`}
    </div>
  )
}

export default TaskList
