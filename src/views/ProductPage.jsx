import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classes from '../styles/Product.module.css'
import Spinner from '../components/Spinner'
import classesBtn from '../styles/Button.module.css'
import useSneakers from '../hooks/useSneakers'
import QuantityCounter from '../components/QuantityCounter';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(1);

    const { isLoading, setIsLoading, addToCart } = useSneakers()

    useEffect(() => {
        getDataApi()
    },[])

    const getDataApi = async () => {
        const url = `https://api.stockx.vlour.me/search?query=${id}`;
        try {
            setIsLoading(true)
            const response = await fetch(url);
            const resultado = await response.json();
            setProduct(resultado.hits[0]);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='container'>
        {isLoading ? <Spinner /> : ( 
            <div  className={`section ${classes.grid} ${classes.product}`} >
                <figure className={classes.product__figure}>
                    <img src={product?.image} alt={product?.title} />
                </figure>
                <section className={product.product__content}>
                    <span className={classes.product__brand}>{product?.brand}</span>
                    <h1 className={classes.product__title}>{product?.title}</h1>
                    <p className={classes.product__description}>{product?.description}</p>
                    <p className={classes.product__price}>{product?.base_price} <span>{product?.currency}</span></p>
                    <div className={classes.product__bottom}>
                        <QuantityCounter count={count} setCount={setCount} />
                        <button className={classesBtn.button} onClick={() => { addToCart(product, count), setCount(1) }}>Add to Cart</button>
                    </div>
                </section>
            </div>
        )}
    </div>
  )
}
