import { createContext, useState, useEffect } from "react";

const SneakersContext = createContext()

const SneakersProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        consultarApi()
    },[])

    const consultarApi = async () => {
        const url = 'https://api.stockx.vlour.me/search?query=Shoes';
        try {
            setIsLoading(true)
            const response = await fetch(url);
            const resultado = await response.json();
            const data = resultado.hits;
            setProducts(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    function addToCart(product) {
        product.quantity = 1;
        const elementExists = cart.findIndex(item => item.id === product.id);
        const updatedCart = elementExists >= 0
          ? [...cart].map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
          : [product, ...cart];
      
        setCart(updatedCart);
        localStorage.setItem('sneakers-cart', JSON.stringify(updatedCart));
    }


    return(
        <SneakersContext.Provider 
            value={{
                products,
                isLoading,
                addToCart,
                cart,
                setCart
            }} 
        >
            {children}
        </SneakersContext.Provider>
    )
}



export {
    SneakersProvider
}

export default SneakersContext