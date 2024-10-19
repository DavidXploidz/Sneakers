import classes from '../styles/CardProduct.module.css'
import ImageComponent from './ImageComponent'
import { Link } from 'react-router-dom'

function CardProduct({ product, addToCart }) {

  const { sku = '', image = '', name = '', salePrice = '' } = product;

  return (
    <article className={classes.card}>
      <Link to={`/product/${sku}`}>
        <ImageComponent src={image} width={300} height={185} alt={name} />
      </Link>
      <h3 className={classes.card__title}>{name.split('-').slice(0, 2).map(part => part.trim()).join(' - ')}</h3>
      <div className={classes.card__bottom}>
        {/* Formateo el precio a formato de moneda */}
        <p className={classes.card__price}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salePrice)}
        </p>
        {/* Uso de useCallback para evitar la creación constante de la función */}
        <button className={classes.card__button} onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </article>

  )
}

export default CardProduct