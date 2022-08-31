import React, { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css'; //記得要引入

interface SwiperComponentProps {
  children: JSX.Element[]
  slidesPerView: number
}

const SwiperCss = styled.div`
    .artSwiper{
      height:344px;
      width:100%
    }
    .swiper-slide{
      overflow: hidden;
      -webkit-filter:grayscale(1);
    }
    .swiper-slide-active {
      -webkit-filter:grayscale(0);

      .contain{
        display:block!important;
      }
    }

    .swiper-pagination-clickable{
      display:flex;
      column-gap:0.5rem;
      justify-content:center;
      margin-top:1rem;
    }
    .swiper-pagination-bullet{
      width:0.5rem;
      height:0.5rem;
      background-color: black;
      display:block;
    }
    .swiper-pagination-bullet-active{
      background-color: #E6553B;
      width:1rem;
    }
    @media (min-width: 1400px) {
      .swiper-slide-active {
        height:100%;
        transition: .7s;
        width:646px!important;
        .contain{
          display:block!important;
        }
      }
      .swiper-slide-prev, .swiper-slide-next{
        transition: .7s;
        align-self:center;
        width:306px!important;
        height:262px;
      } 
    }
    @media (min-width: 576px) {
      .artSwiper{
        height:439px;
        width:100%
      }
      .swiper-pagination-clickable{
        margin-top:1rem;
      }
    }
`

const SwiperComponent: React.FC<SwiperComponentProps> = (props) => {
  const { children, slidesPerView } = props
  const [paginationRef, setPaginationRef] = useState<HTMLElement | null>(null);

  return (
    <SwiperCss>
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        spaceBetween={24}
        grabCursor={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: paginationRef,
        }}
        modules={[Pagination]}
        className="artSwiper"
      >
        {children}
      </Swiper>
      <div ref={(node) => setPaginationRef(node)} className='choose' />
    </SwiperCss>
  )
}


export default SwiperComponent