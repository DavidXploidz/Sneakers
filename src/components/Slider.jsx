// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

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
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {isLoading ? <Spinner /> : (
            products.slice(6,12).map(product => (
                <SwiperSlide key={product.sku}>
                    <div className={classes.sliderContainer}>
                        <div className={classes.sliderContent}>
                            <h1 className={classes.title}>{product.name}</h1>
                            <p className={classes.price}>{product.salePrice} USD</p>
                        </div>
                        <figure>
                            <img src={product.image} alt={`Image ${product.name}`} />
                        </figure>
                    </div>
                </SwiperSlide>
            ))
        )}
    </Swiper>
  )
}

export default Slider