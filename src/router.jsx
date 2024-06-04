import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import Layout from './layouts/Layout'
import AboutPage from './views/AboutPage'
import WomenPage from './views/WomenPage'
import MenPage from './views/MenPage'
import Product from './views/Product'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={ <IndexPage /> } index />
          <Route path='about' element={ <AboutPage /> } />
          <Route path="women" element={ <WomenPage /> } />
          <Route path="men" element={ <MenPage /> } />
          <Route path="product/:id" element={ <Product /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
