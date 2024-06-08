import classes from '../styles/CardProduct.module.css'
import ImageComponent from './ImageComponent'

function CardProduct({ product, addToCart }) {

  const { id, image, title, base_price, currency } = product

  return (
    <article className={classes.card} >
      <a href={`product/${id}`} >
        <ImageComponent src={image} />
      </a>
      <h3 className={classes.card__title}>{title}</h3>
      <div className={classes.card__bottom}>
        <p className={classes.card__price}>{base_price} {currency}</p>
        <button className={classes.card__button} onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </article>
  )
}

export default CardProduct