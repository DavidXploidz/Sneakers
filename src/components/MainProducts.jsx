import React, { useState, useEffect } from 'react'
import CardProduct from './CardProduct'
import Spinner from './Spinner'

function MainProducts() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        consultarApi()
    },[])

    const consultarApi = async () => {
        const url = 'https://api.stockx.vlour.me/search?query=Shoes';
        try {
            setIsLoading(true)
            const response = await fetch(url);
            const resultado = await response.json();
            const data = resultado.hits.slice(0, 6);
            setProducts(data);
            // setProducts(resultado.hits);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='grid-responsive'>
        {isLoading ? <Spinner /> : (
            products.map(product => {
                return(
                    <CardProduct key={product.id} product={product} />
                )
            })
        )}
    </div>
  )
}

export default MainProducts