import React, {useState, useEffect} from 'react'
import { Blurhash } from 'react-blurhash'
import classes from '../styles/CardProduct.module.css'

export default function ImageComponent({ src }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

  return (
    <>
        <div style={{display: imageLoaded ? 'none' : 'inline'}}>
            <Blurhash 
                hash='LKN]Rv%2Tw=w]~RBVZRi};RPxuwH'
                width={300}
                height={185}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
        </div>
        <img className={classes.card__img} src={src} alt="image product" style={{display: !imageLoaded ? 'none' : 'inline'}} />
    </>
  )
}
