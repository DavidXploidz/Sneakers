import classes from '../styles/About.module.css'
import aboutImage from '../assets/svg/about.svg'

export default function AboutPage() {
  return (
    <div className={`${classes.about} container`}>
      <div className={classes.about__main}>
        <h1 className={classes.about__title}>Who we are.</h1>
        <p className={classes.about__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium harum neque reiciendis consequuntur officia, quos unde, inventore exercitationem consectetur necessitatibus magnam, error vero voluptatum iusto tenetur itaque? Pariatur, excepturi praesentium!</p>
      </div>
      <figure className={classes.about__figure}>
        <img src={aboutImage} alt="About picture descriptive" />
      </figure>
    </div>
  )
}
