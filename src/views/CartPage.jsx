import React, { useMemo, useState } from 'react'
import cartBg from '../assets/svg/cart.svg'
import classes from '../styles/Cart.module.css'
import buttons from '../styles/Button.module.css'
import useSneakers from '../hooks/useSneakers'
import ImageComponent from '../components/ImageComponent'
import QuantityCounter from '../components/QuantityCounter'
import { toast } from 'react-toastify';

export default function CartPage() {

  const { cart, setCart } = useSneakers()

  const [edit, setEdit] = useState({})
  const [count, setCount] = useState(1);

  // State derivado
  const isEmpty = cart.length <= 0;

  const handleClickDelete = (id) => {
    const newArray = cart.filter(item => item.id !== id);
    setCart(newArray)
    localStorage.setItem('sneakers-cart', JSON.stringify(newArray));
    toast.error('Item deleted from Cart', {
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

  const handleClickEdit = (id, quantity) => {
    setEdit({editing: id})
    setCount(quantity)
  }

  const handleClickUpdate = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: count }; // Cantidad actualizada
      } else {
        return item;
      }
    });
    setCart(updatedCart);
    localStorage.setItem('sneakers-cart', JSON.stringify(updatedCart));
    setEdit({})
    toast.info('Updated Quantity', {
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

  const cartTotal = useMemo(() => cart.reduce((total, item ) => total + (item.quantity * item.base_price), 0), [cart])

  return (
    <div className='container section'>
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
                    <ImageComponent src={item.image} width={130} height={100}  />
                  </figure>
                  <section>
                    <p className={classes.title}>{item.title}</p>
                    <div className={classes.space}>
                      {edit.editing === item.id ? (
                        <>
                          <QuantityCounter count={count} setCount={setCount} />
                        </>
                      ) : (
                        <p className={classes.price}>$ {item.base_price} <span className={classes.quantity}>x {item.quantity}</span></p>
                      )}
                      <div className={classes.buttons}>
                      {edit.editing === item.id ? (
                        <button className={classes.save} onClick={() => handleClickUpdate(item.id) }><i className='bx bx-save'></i></button>
                      ): (
                        <button className={classes.edit} onClick={() => handleClickEdit(item.id, item.quantity) }><i className='bx bx-edit'></i></button>
                      )}
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
