import classes from '../styles/Spinner.module.css'

function Spinner() {
  return (
    <div className={classes.skChase}>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
        <div className={classes.skChaseDot}></div>
    </div>
  )
}

export default Spinner