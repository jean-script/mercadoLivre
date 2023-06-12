import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper'

import celular from '../../assets/Bannercelular.jpg'
import ps4 from '../../assets/BannerPS4.jpg'
import fone from '../../assets/BannerFonePs4.png'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';

export default function Carrosel(){
    return(
        <Swiper
            modules={[ Navigation, Pagination, Autoplay ]} 
            navigation={true}
            pagination={{ clickable:true }}
            autoplay={{ delay:5000 }}
            loop={true}
            className='swiper-container'>
            <SwiperSlide className='slide-item'>
                <img src={celular} alt='banner celular' />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src={ps4} alt='banner ps4' />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src={fone} alt='banner Fone do ps4' />
            </SwiperSlide>
        </Swiper>
    );
}
