import classes from '../styles/Button.module.css'

export default function Button({text, id}) {

  const handleAddCart = (id) => {
    console.log('Agregando',id);
  }
  return (
    <button className={classes.button} onClick={() => handleAddCart(id)}>
        {text}
    </button>
  )
}
