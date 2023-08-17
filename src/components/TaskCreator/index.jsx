import { useCallback, useState } from "react"
import Modal from "../Modal/Modal"
import { useTask } from "../../contexts/Tasks"
import TaskForm from "../Forms/TaskForm"

const TaskCreator = ({ isOpen, setIsOpen }) => {
  const [form, setForm] = useState({ title: '' })
  const { addTask } = useTask()

  const handleChange = useCallback(
    ({ target: { name, value }}) => {
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }, []
  )

  const handleSubmit = useCallback(() => {
    addTask(form.title)
    setIsOpen(false)
  }, [form])

  return (
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <TaskForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
      </Modal>
  )
}

export default TaskCreator
