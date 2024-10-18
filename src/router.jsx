import {Routes, Route, HashRouter} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import Layout from './layouts/Layout'
import AboutPage from './views/AboutPage'
import WomenPage from './views/WomenPage'
import MenPage from './views/MenPage'
import Product from './views/ProductPage'
import CartPage from './views/CartPage'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={ <IndexPage /> } index />
          <Route path='about' element={ <AboutPage /> } />
          <Route path="cameras" element={ <WomenPage /> } />
          <Route path="tvs" element={ <MenPage /> } />
          <Route path="cart" element={ <CartPage /> } />
          <Route path="product/:id" element={ <Product /> } />
        </Route>
      </Routes>
    </HashRouter>
  )
}
