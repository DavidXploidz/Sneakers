import classes from '../styles/Product.module.css'

export default function QuantityCounter({count, setCount}) {

    const decrementCount = () => {
        const newCount = count <= 1 ? 1 : count - 1;
        setCount(newCount);      
    };

  return (
    <div className={classes.counter}>
        <button onClick={() => decrementCount()}><img src="/src/assets/svg/minus_icon.svg" alt="icon minus" /></button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}><img src="/src/assets/svg/plus_icon.svg" alt="icon plus" /></button>
    </div>
  )
}
