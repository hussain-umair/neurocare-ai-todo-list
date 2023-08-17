import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { localStorage } from "../../utils/localstorage";


const TasksContext = createContext()
const { Provider } = TasksContext

const useTaskProvider = () => {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const taskList = localStorage.get('taskList')
    if (taskList) {
      setTasks(taskList)
    }
  }, [])
  const addTask = useCallback((title) => {
    const newTaskList = [...tasks, { id: uuidv4(), isCompleted: false, title }]
    setTasks(newTaskList)
    localStorage.set('taskList', newTaskList)
  }, [tasks])

  const updateTask = useCallback(
    (id, val) => {
      const updatedTaskList = tasks.map(
        (task) => 
          ({ 
            ...task, 
            isCompleted: 
              task.id === id
                ? val 
                : task.isCompleted
          })
      )
      setTasks(updatedTaskList)
      localStorage.set('taskList', updatedTaskList)
    }, [tasks])

  const deleteTask = useCallback(
    (taskId) => {
      const newTaskList = tasks.filter(({ id }) => id !== taskId)
      setTasks(newTaskList)
      localStorage.set('taskList', newTaskList)
    }, [tasks])

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask
  }
}

export const useTask = () => useContext(TasksContext)

const TaskProvider = ({ children }) => {
  const taskValues = useTaskProvider()
  
  return <Provider value={taskValues}>{children}</Provider>
}

export default TaskProvider