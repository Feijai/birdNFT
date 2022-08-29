import React from 'react'
import styled from 'styled-components'

const MoreBtnCss = styled.div`
    background-color:inherit;
    right:0;
    button{
        font-size:18px;
        color:black;
        line-height:19px;
    }
    .triangleBottom{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 16px 16px;
        border-color: transparent transparent #000000 transparent;
    }
    :hover{
        background-color:#E6553B;
        border:1px solid black;
        button{
            color:white;
        }
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
        <MoreBtnCss className='position-absolute bottom-0'>
            <div className='position-relative px-5 py-2'>
                <button className='moreBtn ffSO p-0'>more</button>
                <div className="triangleBottom position-absolute bottom-0 end-0 "></div>
            </div>
        </MoreBtnCss>
    )
}


