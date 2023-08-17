import { useState } from 'react'
import TaskCreator from '../TaskCreator'
import classes from './Header.module.scss'

const Header = () => {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false)
  return (
    <header className={classes.header}>
      <div>Task Tracker</div>
      <button onClick={() => setIsTaskCreatorOpen(true)}>+ Create Task</button>
      {isTaskCreatorOpen && (
        <TaskCreator
          isOpen={isTaskCreatorOpen}
          setIsOpen={setIsTaskCreatorOpen}
        />
      )}
    </header>
  )
}

export default Header
