import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CardProduct from "../components/CardProduct"
import Spinner from "../components/Spinner"
import useSneakers from '../hooks/useSneakers'

export default function MenPage() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { addToCart } = useSneakers()

    useEffect(() => {
        getDataApi()
    },[])
    
    const getDataApi = async () => {
        const apiKey = 'zXU8tS8PXNyDgijFGV77FQ7E';
        const url = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0101000))?apiKey=${apiKey}&sort=salePrice.asc&show=name,salePrice,description,image,condition,url,sku&pageSize=20&format=json`;
      
        try {
          setIsLoading(true);
          const response = await fetch(url);
      
          if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
          }
      
          const resultado = await response.json();
      
          if (!resultado) {
            console.warn('Not found');
            // Handle no product found scenario (optional: set empty state or display message)
          }
      
          const data = resultado.products; 
          setProducts(data);
        } catch (error) {
          console.error('Error fetching product data:', error);
          // Handle API errors gracefully (optional: display error message)
        } finally {
          setIsLoading(false);
        }
    };

  return (
    <div>
        <Banner bg={'banner--men'} title={'Man Up: Unleash Your Style Potential'} />
        <div className="container">
            <div className="grid-responsive">
                {isLoading ? <Spinner /> : (
                    products.map(product => {
                        return (
                            <CardProduct key={product.sku} product={product} addToCart={addToCart} />
                        )
                    })
                )}
            </div>
        </div>
    </div>
  )
}
