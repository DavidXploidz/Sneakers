import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classes from '../styles/Product.module.css'
import Spinner from '../components/Spinner'
import Button from '../components/Button'

export default function Product() {
    const { id } = useParams();

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(0);

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

    const decrementCount = () => {
        const newCount = count <= 0 ? 0 : count - 1;
        setCount(newCount);      
    };

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
                        <div className={classes.counter}>
                            <button onClick={() => decrementCount()}><img src="/src/assets/svg/minus_icon.svg" alt="icon minus" /></button>
                            <p>{count}</p>
                            <button onClick={() => setCount(count + 1)}><img src="/src/assets/svg/plus_icon.svg" alt="icon plus" /></button>
                        </div>
                        <Button text={'Add to Cart'} />
                    </div>
                </section>
            </div>
        )}
    </div>
  )
}
