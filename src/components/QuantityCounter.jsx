import classes from '../styles/Product.module.css'
import minusIcon from '../assets/svg/minus_icon.svg'
import plusIcon from '../assets/svg/plus_icon.svg'

export default function QuantityCounter({count, setCount}) {

    const decrementCount = () => {
        const newCount = count <= 1 ? 1 : count - 1;
        setCount(newCount);      
    };

  return (
    <div className={classes.counter}>
        <button onClick={() => decrementCount()}><img src={minusIcon} alt="icon minus" /></button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}><img src={plusIcon} alt="icon plus" /></button>
    </div>
  )
}
