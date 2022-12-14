import React, { useState } from 'react'
import styled from 'styled-components'
import ArtTitle from '../../components/ArtTitle'
import MasonryComponent from '../../components/MasonryComponent'

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


export default function ArtWork() {
    return (
        <ArtWorkCss>
            <ArtTitle title='Artwork' text='最新藝術品' />
            <div className="container">
                <MasonryComponent num={8} />
            </div>
        </ArtWorkCss>
    )
}
