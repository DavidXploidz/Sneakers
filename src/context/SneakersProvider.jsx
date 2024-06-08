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

    return(
        <SneakersContext.Provider 
            value={{
                products,
                isLoading
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