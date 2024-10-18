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
        const apiKey = 'zXU8tS8PXNyDgijFGV77FQ7E';
        const url = `https://api.bestbuy.com/v1/products/${id}.json?apiKey=${apiKey}`;
      
        try {
          setIsLoading(true);
          const response = await fetch(url);
      
          if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
          }
      
          const resultado = await response.json();
      
          if (!resultado) {
            console.warn(`No product found with ID: ${productId}`);
            // Handle no product found scenario (optional: set empty state or display message)
          }
      
          const data = resultado; 
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product data:', error);
          // Handle API errors gracefully (optional: display error message)
        } finally {
          setIsLoading(false);
        }
    }

  return (
    <div className='container'>
        {isLoading ? <Spinner /> : ( 
            <div  className={`section ${classes.grid} ${classes.product}`} >
                <figure className={classes.product__figure}>
                    <img src={product?.image} alt={product?.name} />
                </figure>
                <section className={product.product__content}>
                    <span className={classes.product__brand}>{product?.manufacturer}</span>
                    <h1 className={classes.product__title}>{product?.name}</h1>
                    <p className={classes.product__description}>{product?.description}</p>
                    <p className={classes.product__price}>{product?.salePrice} <span>USD</span></p>
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
