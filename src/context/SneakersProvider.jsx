import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

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
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${apiKey}&sort=salePrice.desc&show=name,salePrice,description,image,condition,url,sku&pageSize=20&format=json`;
      
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

    function addToCart(product, count = 1) {
        const updatedProduct = { ...product, quantity: count };
        const elementIndex = cart.findIndex(item => item.sku === product.sku);
    
        let updatedCart;
        if (elementIndex >= 0) {
            updatedCart = cart.map(item => 
                item.sku === product.sku 
                    ? { ...item, quantity: item.quantity + count } 
                    : item
            );
        } else {
            updatedCart = [updatedProduct, ...cart];
        }
    
        localStorage.setItem('sneakers-cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
        toast.success('Added to Cart', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
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