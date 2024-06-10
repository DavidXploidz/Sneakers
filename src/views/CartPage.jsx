import React, { useState, useEffect, useMemo } from 'react'
import cartBg from '../assets/svg/cart.svg'
import classes from '../styles/Cart.module.css'
import buttons from '../styles/Button.module.css'
import useSneakers from '../hooks/useSneakers'

export default function CartPage() {

  const { cart, setCart } = useSneakers()

  // State derivado
  const isEmpty = cart.length <= 0;

  useEffect(() => {
    const recoverCart = JSON.parse(localStorage.getItem('sneakers-cart'))
    if(recoverCart === null || recoverCart.length <= 0){
    }else{
      setCart(recoverCart)
    }
  }, [])

  const handleClickDelete = (id) => {
    const newArray = cart.filter(item => item.id !== id);
    setCart(newArray)
    localStorage.setItem('sneakers-cart', JSON.stringify(newArray));
  }

  const cartTotal = useMemo(() => cart.reduce((total, item ) => total + (item.quantity * item.base_price), 0), [cart])

  return (
    <div className='container'>
      <div className={classes.cart}>
        <h1 className={classes.cart__title}>
          {isEmpty ? 'Your cart is empty!' : 'Your cart'}
        </h1>
        {isEmpty ? (
          <img className={classes.cart__bg} src={cartBg} alt="Image cart" />
        ): (
          <div className={classes.cart__box}>
            <div className={classes.cart__resume}>
              {cart.map(item => (
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
