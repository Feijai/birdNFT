import React from 'react'
import styled from 'styled-components'
import ArtistNavbar from './ArtistNavbar'
import Header from './Header'

const ArtistDetailCss = styled.div`
    .container{
        padding-top:80px;
    }
`

export default function ArtistDetail() {
    return (
        <ArtistDetailCss>
            <div className="container">
                <Header />
                <ArtistNavbar />
            </div>
        </ArtistDetailCss>
    )
}
