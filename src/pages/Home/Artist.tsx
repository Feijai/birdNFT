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
interface ArtistCardCssProps {
  img: string
}

const ArtistCardCss = styled.div<ArtistCardCssProps>`
  height:100%;
  background-image : url(${(props) => (props.img)});
  background-position: center center;
  background-size: cover;
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
  @media (max-width: 576px) {
    h2{
    font-size:48px;
  }
  }

`

const ArtistCard: React.FC<ArtistProps> = (data) => {
  return (
    <ArtistCardCss img={data.pic}>
      <div className='contain position-relative d-none w-100 h-100'>
        <div className="name position-absolute text-white">
          <h2 className='ffSO'>{data.firstName}</h2>
          <h2 className='ffSO'>{data.lastName}</h2>
        </div>
        <div className='text position-absolute p-4 d-none d-sm-block'>
          <span>{data.text}</span>
        </div>
        <MoreBtn2 position='1.5rem' />
      </div>
      {/* <div className='text2 p-4'>
          <span>{data.text}</span>
      </div> */}
    </ArtistCardCss>
  )
}

const Artist = () => {
  const [wd, setWd] = useState(window.innerWidth >= 1400 ? true : false)


  window.addEventListener('resize', (e) => {
    window.innerWidth >= 1400 ? setWd(true) : setWd(false)
  })

  const createChildren = () => {
    return data.map((ele, idx) => {
      return (
        <SwiperSlide key={idx}><ArtistCard {...ele} /></SwiperSlide>
      )
    })
  }

  return (
    <>
      <ArtTitle title='Artist' text='熱門藝術家' />
      <ArtistCss>
        <div className="container">
          {wd && <SwiperComponent children={createChildren()} slidesPerView={3} />}
          {!wd && <SwiperComponent children={createChildren()} slidesPerView={1} />}

        </div >
      </ArtistCss>
    </>
  )
}


export default Artist