import TaskProvider from './Tasks'

const AppProvider = ({ children }) => {
  return <TaskProvider>{children}</TaskProvider>
}

export default AppProvider
