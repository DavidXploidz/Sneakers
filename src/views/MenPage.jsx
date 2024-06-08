import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CardProduct from "../components/CardProduct"
import Spinner from "../components/Spinner"

export default function MenPage() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getDataApi()
    },[])

    const getDataApi = async () => {
        const url = 'https://api.stockx.vlour.me/search?query=Men';
        try {
            setIsLoading(true)
            const response = await fetch(url);
            const resultado = await response.json();
            setProducts(resultado.hits);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    function addToCart(product){
        setCart(prevCart => [...prevCart, product])
    }

  return (
    <div>
        <Banner bg={'banner--men'} title={'Man Up: Unleash Your Style Potential'} />
        <div className="container">
            <div className="grid-responsive">
                {isLoading ? <Spinner /> : (
                    products.map(product => {
                        return (
                            <CardProduct key={product.id} product={product} addToCart={addToCart} />
                        )
                    })
                )}
            </div>
        </div>
    </div>
  )
}
