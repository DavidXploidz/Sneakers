import React, { useState, useEffect } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from '../styles/Slider.module.css';
import Spinner from './Spinner';

function Slider() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        consultarApi()
    },[])

    const consultarApi = async () => {
        const url = 'https://api.stockx.vlour.me/search?query=Shoes';
        try {
            setIsLoading(true)
            const response = await fetch(url);
            const resultado = await response.json();
            const data = resultado.hits.slice(0, 5);
            setProducts(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {isLoading ? <Spinner /> : (
            products.map(product => (
                <SwiperSlide key={product.id}>
                    <div className={classes.sliderContainer}>
                        <div className={classes.sliderContent}>
                            <h1 className={classes.title}>{product.title}</h1>
                            <p className={classes.price}>{product.base_price} {product.currency}</p>
                        </div>
                        <figure>
                            <img src={product.image} alt={`Image ${product.title}`} />
                        </figure>
                    </div>
                </SwiperSlide>
            ))
        )}
    </Swiper>
  )
}

export default Slider