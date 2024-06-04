import classes from '../styles/Banner.module.css'

export default function Banner({bg, title}) {

  return (
    <div className={`${classes.banner} ${classes[bg]}`}>
      <h1 className={classes.banner__title}>{title}</h1>
    </div>
  )
}
