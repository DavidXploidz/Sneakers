import CardProduct from './CardProduct'
import Spinner from './Spinner'
import useSneakers from '../hooks/useSneakers'

function MainProducts() {
    const { products, isLoading, addToCart } = useSneakers()
  return (
    <div className='grid-responsive'>
        {isLoading ? <Spinner /> : (
            products.map((product, index) => {
                return(
                    <CardProduct key={product.sku} product={product} addToCart={addToCart} />
                )
            })
        )}
    </div>
  )
}

export default MainProducts