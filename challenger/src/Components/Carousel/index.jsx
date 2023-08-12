import React from 'react';


import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider1 from '../../Assets/Images/GettyImages-1189122329@2x.png';
import slider2 from '../../Assets/Images/slider2.png';
import slider3 from '../../Assets/Images/slider3.png';

import { Container } from './styles';

export default function Carousel() {
    return (
        <Container>
            <Swiper 
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className='sliderSwiper'
            >
                    <SwiperSlide>
                       <div className='slider1'>
                            <img src={slider1} alt='slider1' />
                            <div className='slider1TextLeft'>
                            <p>Teste da<br />
                                <span>Delta</span>
                            </p>
                            </div>
                            <div className='slider1TextRight'>
                            <p>Qual <br/>
                                <span className='slider1RightSpan1'>teste</span><br/>
                                <p>você quer fazer</p>
                                <span className='slider1RightSpan2'>hoje?</span>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='slider2'>
                            <img src={slider2} alt='slider2' />
                            <div className='slider2Text'>
                                <p> Segundo <br/>
                                    <span>Slider</span>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='slider3'>
                            <img src={slider3} alt='slider3' />
                            <div className='slider3Text'>
                                <p> Terceiro <br/>
                                    <span>Slider</span>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
            </Container>
    )
}