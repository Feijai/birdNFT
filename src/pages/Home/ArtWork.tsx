import React from 'react'
import styled from 'styled-components'
import ArtTitle from '../../components/ArtTitle'
// Masonry layout
import Masonry from "react-masonry-component";

import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MoreBtn2 } from '../../components/MoreBtn'

import p1 from '../../assets/art09.jpg'
import p2 from '../../assets/art10.jpg'
import p3 from '../../assets/art02.jpg'
import p4 from '../../assets/art11.jpg'
import p5 from '../../assets/art12.jpg'
import p6 from '../../assets/art03.jpg'
import p7 from '../../assets/art04.jpg'
import p8 from '../../assets/art27.jpg'



const data = [{ img: p1, title: '區塊戀-他的私生活', text: '不想生活', money: 350 },
{ img: p2, title: '夏娃的醜聞', text: '唯一想擁有的人,唯一不可擁有的', money: 300 },
{ img: p3, title: '藍色啤酒海', text: '不想生活', money: 399 },
{ img: p4, title: '沒有人愛我', text: '唯一想擁有的人,唯一不可擁有的', money: 400 },
{ img: p5, title: '不哭不哭眼淚是珍珠', text: '不想生活', money: 450 },
{ img: p6, title: '十分鐘就到', text: '唯一想擁有的人,唯一不可擁有的', money: 200 },
{ img: p7, title: '我這樣有美嗎', text: '不想生活', money: 150 },
{ img: p8, title: '我真的受傷了', text: '唯一想擁有的人,唯一不可擁有的', money: 180 },
]

const ArtWorkCss = styled.div`
    .arts{
        border-top:1px solid black;
        padding-bottom:80px;
    }
    @media (max-width:576px ) {
        .arts{
            padding-bottom:48px;
        }
    }
`

interface ArtWorkCardProps {
    img: string;
    title: string;
    text: string;
    money: number;
}

const ArtWorkCardCss = styled.div`
    
    .CardContain{
        background-color:white
    }
    .cardImg{
        width:100%;
        height:100%;
    }
    .title{
        border-bottom:1px solid black;
    }
    .cardHover{
        display:none;
        width:calc(100% - 3rem);
        height:calc(100% - 3rem);
        background-color:#000000;
        opacity:0.7;
        .cardInside{
            border:1px solid white;
            color:white;
        }
    }
    :hover{
        .cardHover{
            display:block;
        }
    }
`

const ArtWorkCard: React.FC<ArtWorkCardProps> = (data) => {
    return (
        <ArtWorkCardCss className='col-sm-3 position-absolute pt-4 pt-sm-5'>
            <div className="CardContain p-4 position-relative">
                <img src={data.img} alt="" className='cardImg' />
                <div className='cardHover position-absolute top-50 start-50 translate-middle p-3'>
                    <div className='cardInside h-100 p-3 position-relative '>
                        <div>{data.text}</div>
                        <div><FontAwesomeIcon icon={faBitcoinSign} className='icon' /><span className='ms-1'>{data.money}</span></div>
                        <MoreBtn2 position='1rem'/>
                    </div>
                </div>
            </div>
            <div className="title py-3"><h6 className='mb-0 fw-bold'>{data.title}</h6></div>


        </ArtWorkCardCss>
    )
}

export default function ArtWork() {
    return (
        <ArtWorkCss>
            <ArtTitle title='Artwork' text='最新藝術品' />
            <div className="container">
                {/* @ts-ignore */}
                <Masonry className="row arts position-relative" >
                    {
                        data.map((ele, idx) => (
                            <React.Fragment key={idx}>
                                <ArtWorkCard {...ele} />
                            </React.Fragment>
                        ))
                    }
                </Masonry>
            </div>
        </ArtWorkCss>
    )
}
