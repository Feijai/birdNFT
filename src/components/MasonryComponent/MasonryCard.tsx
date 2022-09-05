import React from 'react'
import styled from 'styled-components'
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MoreBtn2 } from '../MoreBtn'

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
    @media (max-width: 576px) {
        /* 手機不用hover */
        pointer-events: none;
    }
`

const MasonryCard: React.FC<ArtWorkCardProps> = (data) => {
    return (
        <ArtWorkCardCss className='col-6 col-lg-4 col-xxl-3 position-absolute pt-4 pt-sm-5'>
            <div className="CardContain p-4 position-relative">
                <img src={data.img} alt="" className='cardImg' />
                <div className='cardHover position-absolute top-50 start-50 translate-middle p-3'>
                    <div className='cardInside h-100 p-3 position-relative '>
                        <div>{data.text}</div>
                        <div><FontAwesomeIcon icon={faBitcoinSign} className='icon' /><span className='ms-1'>{data.money}</span></div>
                        <MoreBtn2 right='1rem' bottom='1rem' to='./'/>
                    </div>
                </div>
            </div>
            <div className="title py-3"><h6 className='mb-0 fw-bold'>{data.title}</h6></div>


        </ArtWorkCardCss>
    )
}

export default MasonryCard