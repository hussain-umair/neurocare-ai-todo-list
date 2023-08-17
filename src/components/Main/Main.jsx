import classes from './Main.module.scss'

const Main = ({ children }) => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>{children}</div>
    </main>
  )
}

export default Main
