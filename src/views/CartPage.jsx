import React, { useState, useEffect, useMemo } from 'react'
import cart from '../assets/svg/cart.svg'
import classes from '../styles/Cart.module.css'
import buttons from '../styles/Button.module.css'

export default function CartPage() {

  const [empty, setEmpty] = useState(false)
  const [localCart, setLocalCart] = useState([])

  useEffect(() => {
    const recoverCart = JSON.parse(localStorage.getItem('sneakers-cart'))
    if(recoverCart === null || recoverCart.length <= 0){
      setEmpty(true)
    }else{
      setEmpty(false)
      setLocalCart(recoverCart)
    }
  }, [localCart])


  const handleClickDelete = (id) => {
    const newArray = localCart.filter(item => item.id !== id);
    setLocalCart(newArray)
    localStorage.setItem('sneakers-cart', JSON.stringify(newArray));
  }

  // const cartTotal = () => localCart.reduce((total, item ) => total + (item.quantity * item.base_price), 0)

  const cartTotal = useMemo(() => localCart.reduce((total, item ) => total + (item.quantity * item.base_price), 0), [localCart])

  return (
    <div className='container'>
      <div className={classes.cart}>
        <h1 className={classes.cart__title}>
          {empty ? 'Your cart is empty!' : 'Your cart'}
        </h1>
        {empty ? (
          <img className={classes.cart__bg} src={cart} alt="Image cart" />
        ): (
          <div className={classes.cart__box}>
            <div className={classes.cart__resume}>
              {localCart.map(item => (
                <article className={classes.cart__item} key={item.id}>
                  <figure>
                    <img src={item.image} alt={`Image product ${item.title}`} />
                  </figure>
                  <section>
                    <p className={classes.title}>{item.title}</p>
                    <div className={classes.space}>
                      <p className={classes.price}>$ {item.base_price} <span className={classes.quantity}>x {item.quantity}</span></p>
                      <div className={classes.buttons}>
                        <button className={classes.edit}><i className='bx bx-edit'></i></button>
                        <button className={classes.delete} onClick={() => handleClickDelete(item.id)}><i className='bx bx-trash'></i></button>
                      </div>
                    </div>
                  </section>
                </article>
              ))}
            </div>
            <div className={classes.cart__summary}>
              <h3>Summary</h3>
              <div className={classes.content}>
                <p>Subtotal <span>$ { cartTotal }</span></p>
                <p>Estimated shipping and handling costs <span>Free</span></p>
                <hr />
                <p>Total <span>$ { cartTotal }</span></p>
                <hr />
              </div>
              <button className={buttons.button}>Shop</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
