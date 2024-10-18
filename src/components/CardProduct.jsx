import classes from '../styles/CardProduct.module.css'
import ImageComponent from './ImageComponent'
import { Link } from 'react-router-dom'

function CardProduct({ product, addToCart }) {

  const { sku, image, name, salePrice } = product

  return (
    <article className={classes.card} >
      <Link to={`/product/${sku}`}>
        <ImageComponent src={image} width={300} height={185} />
      </Link>
      <h3 className={classes.card__title}>{name}</h3>
      <div className={classes.card__bottom}>
        <p className={classes.card__price}>{salePrice} USD</p>
        <button className={classes.card__button} onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </article>
  )
}

export default CardProduct