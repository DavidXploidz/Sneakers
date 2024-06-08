import CardProduct from './CardProduct'
import Spinner from './Spinner'
import useSneakers from '../hooks/useSneakers'

function MainProducts() {
    const { products, isLoading } = useSneakers()
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