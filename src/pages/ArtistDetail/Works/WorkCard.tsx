import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { MoreBtn2 } from '../../../components/MoreBtn';

interface WorkCardProps {
    title: string;
    text: string;
    pic: string[];
}

const WorkCardCss = styled.div`
    height:417px;
    padding:3rem 110px 0px 110px;
    .leftTop{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 1.5rem 1.5rem 0 0;
        border-color: black transparent transparent transparent;
    }
    .rightTop{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 1.5rem 0 0 1.5rem;
        border-color: black transparent transparent transparent ;
    }
    .text{
        width:79.554%
    }
    .picContent{
        column-gap:8px;
        bottom:-48px;
        img{
            height: 270px;
            width:263px;
            border:10px solid black;
        }
    }
    @media (max-width: 992px) {
        height:100%;
        padding:2rem 1rem;
        .picContent{
            margin-top:1.5rem;
            position: relative !important;
            bottom:0;
            justify-content:center;
        }
        .header{
            .MoreBtn2{
                display: none !important;;
            }
        }
        .text{
            width:100%;
        }

    }

`

const WorkCard: React.FC<WorkCardProps> = (data) => {
    const setPicNumFC = () => {
        let num = 4
        if (window.innerWidth > 992 && window.innerWidth <= 1400) {
            num = 3
        } else if (window.innerWidth <= 992) {
            num = 1
        }
        return num
    }
    const [num, setNum] = useState(setPicNumFC())
    window.addEventListener('resize', () => {
        setNum(setPicNumFC())
    })

    return (
        <WorkCardCss className='position-relative bg-white col-12 border border-dark'>
            <div className="leftTop position-absolute top-0 start-0" />
            <div className="rightTop position-absolute top-0 end-0" />
            <div className='header position-relative'>
                <h4 className='fw-bold'>{data.title}</h4>
                <div className="text mt-3">
                    <span className=''>{data.text}</span>
                </div>
                <MoreBtn2 bottom='0' right='0' to='' position='absolute' />
            </div>
            <div className="picContent position-absolute d-flex">
                {data.pic.map((ele, idx) => (
                    num > idx && <img src={ele} alt="" key={idx} />
                ))}
            </div>
            <div className='d-lg-none d-block mt-3 d-flex justify-content-center'>
                <MoreBtn2 bottom='' right='' to='' position='relative' />
            </div>
        </WorkCardCss>
    )
}

export default WorkCard