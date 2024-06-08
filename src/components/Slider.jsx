// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from '../styles/Slider.module.css';
import Spinner from './Spinner';
import useSneakers from '../hooks/useSneakers'

function Slider() {
    const { products, isLoading } = useSneakers()

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
            products.slice(6,12).map(product => (
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