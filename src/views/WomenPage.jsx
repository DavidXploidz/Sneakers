import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CardProduct from "../components/CardProduct"
import Spinner from "../components/Spinner"
import useSneakers from '../hooks/useSneakers'

export default function WomenPage() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { addToCart } = useSneakers()

    useEffect(() => {
        getDataApi()
    },[])

    const getDataApi = async () => {
        const url = 'https://api.stockx.vlour.me/search?query=Women';
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


  return (
    <div>
        <Banner bg={'banner--women'} title={'Empower Your Style: Unleash the Diva Within'} />
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
