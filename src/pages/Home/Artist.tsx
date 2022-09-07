import React, { useState } from 'react'
import styled from 'styled-components'
import ArtTitle from '../../components/ArtTitle'
import { SwiperSlide } from "swiper/react";
import { MoreBtn2 } from '../../components/MoreBtn'

import p1 from '../../assets/artist01.jpg'
import p2 from '../../assets/artist02.jpg'
import p3 from '../../assets/artist03.jpg'
import p4 from '../../assets/artist04.jpg'
import p5 from '../../assets/artist05.jpg'
import SwiperComponent from '../../components/SwiperComponent';

const data = [{ pic: p1, firstName: 'Hamburg', lastName: 'Michael', text: '​喜愛大自然，創作題材常見大山、大水、花草與樹木。' },
{ pic: p2, firstName: 'Antony', lastName: 'Wu', text: '​喜愛大自然，創作題材常見大山、大水、花草與樹木。' },
{ pic: p3, firstName: 'LeBrom', lastName: 'James', text: '​喜愛大自然，創作題材常見大山、大水、花草與樹木。' },
{ pic: p4, firstName: 'Jose', lastName: 'Altuve', text: '​喜愛大自然，創作題材常見大山、大水、花草與樹木。' },
{ pic: p5, firstName: 'kevin', lastName: 'Durant', text: '​喜愛大自然，創作題材常見大山、大水、花草與樹木。' },
]

interface ArtistProps {
  pic: string;
  firstName: string;
  lastName: string;
  text: string
  sm: boolean
}

const ArtistCss = styled.div`
    .container{
      border-top:1px solid black;
      padding-top:48px;
      padding-bottom:80px;
      padding-left:0px;
      padding-right:0px;
    }
    @media (max-width: 576px) {
      .container{
        padding-left:12px;
        padding-right:12px;
        padding-top:24px;
        padding-bottom:40px;
      }
    }
`
const ArtistCardCss = styled.div`
  height:100%;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:bottom bottom;
  }
  h2{
    font-size:80px;
  }
  .name{
    top:24px;
    left:24px;
  }
  .text{
    width:calc(50% - 1.5rem);
    background-color:white;
    opacity:0.85;
    bottom:24px;
    left:24px;
  }
  .text2{
    z-index:10;
  }
  @media (max-width: 576px) {
    img{
      height:67.44%;
    }
    h2{
      font-size:32px;
    }
    .text{
      width:100%;
      bottom:0;
      left:0;
    }
  }

`

const ArtistCard: React.FC<ArtistProps> = (data) => {
  return (
    <>
      <ArtistCardCss >
        <img src={data.pic} alt="" className='position-absolute top-0 start-0' />
        <div className='contain position-relative d-none w-100 h-100'>
          <div className="name position-absolute text-white">
            <h2 className='ffSO mb-0'>{data.firstName}</h2>
            <h2 className='ffSO mb-0'>{data.lastName}</h2>
          </div>
          <div className='text position-absolute p-4 '>
            <span>{data.text}</span>
          </div>
          {data.sm ? <MoreBtn2 bottom='1.5rem' right='1.5rem' to='/artistDetail' position='absolute'/>
            : <MoreBtn2 bottom='calc(32.56% + 1rem)' right='1rem' to='/artistDetail' position='absolute' />}
        </div>

      </ArtistCardCss>
    </>
  )
}

const Artist = () => {
  const [wd, setWd] = useState(window.innerWidth >= 1400)
  const [sm, setSm] = useState(window.innerWidth > 576)

  window.addEventListener('resize', (e) => {
    window.innerWidth >= 1400 ? setWd(true) : setWd(false)
    window.innerWidth > 576 ? setSm(true) : setSm(false)
  })

  const createChildren = () => {
    return data.map((ele, idx) => {
      return (
        <SwiperSlide key={idx}><ArtistCard {...ele} sm={sm} /></SwiperSlide>
      )
    })
  }

  return (
    <>
      <ArtTitle title='Artist' text='熱門藝術家' />
      <ArtistCss>
        <div className="container">
          {wd ? <SwiperComponent children={createChildren()} slidesPerView={3} />
            : <SwiperComponent children={createChildren()} slidesPerView={1} />}

        </div >
      </ArtistCss>
    </>
  )
}


export default Artist