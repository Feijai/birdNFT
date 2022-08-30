import React, { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css'; //記得要引入

const SwiperCss = styled.div`
    
`

const SwiperComponent = () => {
  const [paginationRef, setPaginationRef] = useState<HTMLElement | null>(null);

  return (
    <SwiperCss>
      <div className="container">
        <Swiper
          loop={true}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={24}
          grabCursor={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: paginationRef,
          }}
          modules={[Pagination]}
          className="artSwiper d-none d-xxl-block"
        >

        </Swiper>
        <div ref={(node) => setPaginationRef(node)} className='choose' />
      </div >
    </SwiperCss>
  )
}


export default SwiperComponent