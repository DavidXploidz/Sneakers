import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CardProduct from "../components/CardProduct"
import Spinner from "../components/Spinner"

export default function WomenPage() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    function addToCart(product){
        const elementExists = cart.findIndex(item => item.id === product.id)
        if(elementExists >= 0){
            const updatedCart = [...cart]
            updatedCart[elementExists].quantity++
            setCart(updatedCart)
            saveCart()
        }else{
            product.quantity = 1
            setCart([product, ...cart])
            saveCart()
        }
    }

    function saveCart(){
        const newArray = cart;
        setTimeout(() => {
            localStorage.setItem('sneakers-cart', JSON.stringify(newArray));
        }, 300);
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
