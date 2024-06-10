import { createContext, useState, useEffect } from "react";

const SneakersContext = createContext()

const SneakersProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        consultarApi()
        getItemsCart()
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

    function addToCart(product, count = 1) {
        const updatedProduct = { ...product, quantity: count };
        const elementIndex = cart.findIndex(item => item.id === product.id);
    
        let updatedCart;
        if (elementIndex >= 0) {
            updatedCart = cart.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + count } 
                    : item
            );
        } else {
            updatedCart = [updatedProduct, ...cart];
        }
    
        localStorage.setItem('sneakers-cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    }

    function getItemsCart(){
        const recoverCart = JSON.parse(localStorage.getItem('sneakers-cart'))
        if(recoverCart === null || recoverCart.length <= 0) return
        setCart(recoverCart)
    }


    return(
        <SneakersContext.Provider 
            value={{
                products,
                isLoading,
                setIsLoading,
                addToCart,
                cart,
                setCart,
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