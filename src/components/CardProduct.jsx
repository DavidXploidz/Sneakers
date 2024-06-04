import Button from './Button'
import classes from '../styles/CardProduct.module.css'
import ImageComponent from './ImageComponent'

function CardProduct({product}) {

  return (
    <article className={classes.card} >
      <a href={`product/${product.id}`} >
        <ImageComponent src={product.image} />
        {/* <img className={classes.card__img} src={product.image} alt={product.title} /> */}
      </a>
      <h3 className={classes.card__title}>{product.title}</h3>
      <div className={classes.card__bottom}>
        <p className={classes.card__price}>{product.base_price} {product.currency}</p>
        <Button text='Add to Cart' />
      </div>
    </article>
  )
}

export default CardProduct