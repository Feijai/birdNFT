import React from 'react'
import styled from 'styled-components'

const MoreBtnCss = styled.button`
    width:132px;
    height:35px;
    background-color:inherit;
    right:0;
    font-size:18px;
    color:black;
    .triangleBottom{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 16px 16px;
        border-color: transparent transparent #E6553B transparent;
    }
    :hover{
        background-color:#E6553B;
        border:1px solid black;
        color:white;

        .triangleBottom{
            border-color: transparent transparent #000000 transparent;
        }
    }
    @media (max-width: 576px) {
        right:12px;
    }
`

export const MoreBtn: React.FC = () => {
    return (
        <MoreBtnCss className='position-absolute bottom-0 p-0'>
            <div className='position-relative d-flex justify-content-center align-items-center w-100 h-100'>
                <span className='moreBtn ffSO'>more</span>
                <div className="triangleBottom position-absolute bottom-0 end-0 "></div>
            </div>
        </MoreBtnCss>
    )
}

const MoreBtn2Css = styled.button`
    padding:0px;
    background-color:white;
    border:1px solid black;
    right:1rem;
    bottom:1rem;
    font-size:18px;
    color:black;
    width:132px;
    height:35px;    
    .triangleBottom{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 16px 16px;
        border-color: transparent transparent #E6553B transparent;
    }
`

export const MoreBtn2: React.FC = () => {
    return (
        <MoreBtn2Css className='position-absolute d-flex'>
            <div className='position-relative d-flex justify-content-center align-items-center w-100 h-100'>
                <span className='ffSO'>more</span>
                <div className="triangleBottom position-absolute bottom-0 end-0 "></div>
            </div>
        </MoreBtn2Css>
    )
}