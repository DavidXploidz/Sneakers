import Slider from '../components/Slider'
import MainProducts from '../components/MainProducts'

export default function IndexPage() {
  return (
    <>
        <Slider/>
        <div className="container section">
            <MainProducts />
        </div>
    </>
  )
}
