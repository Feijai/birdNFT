import React from 'react'
import styled from 'styled-components'
import { MoreBtn } from '../MoreBtn';
const ArtTitleCss = styled.div`
    h3{
        font-size:1.25rem;
    }
    @media (max-width:576px) {
        h2{
            font-size:2rem;
        }
    }
`

interface ArtTitleProps {
    title: string;
    text: string
}
const ArtTitle: React.FC<ArtTitleProps> = ({ title, text }) => {
    return (
        <ArtTitleCss className='container d-flex position-relative'>
            <h2 className='fsTitle ffSO mb-3'>{title}</h2>
            <h3 className='d-none d-sm-block mb-0 align-self-center ms-3'>{text}</h3>
            <MoreBtn />
        </ArtTitleCss>
    )
}

export default ArtTitle