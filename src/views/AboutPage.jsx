import classes from '../styles/About.module.css'
import imagePerson from '../assets/images/about_person.webp'

export default function AboutPage() {
  return (
    <div className={classes.about}>
      <div className={classes.about__main}>
        <h1 className={classes.about__title}>Who we are.</h1>
        <p className={classes.about__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium harum neque reiciendis consequuntur officia, quos unde, inventore exercitationem consectetur necessitatibus magnam, error vero voluptatum iusto tenetur itaque? Pariatur, excepturi praesentium!</p>
      </div>
      <aside className={`${classes.about__right} ${classes.overlay}`}></aside>
    </div>
  )
}
