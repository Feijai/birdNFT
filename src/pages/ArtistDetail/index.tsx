import React, { useState } from 'react'
import styled from 'styled-components'
import ArtistNavbar from './ArtistNavbar'
import Header from './Header'
import Works from './Works'

const ArtistDetailCss = styled.div`
    .container{
        padding-top:80px;
    }
    @media (max-width: 1200px) { 
        .container{
            padding-top:46px;
        }    
    }
    @media (max-width: 576px) {
        .container{
            padding-top:24px;
        }    
    }
`

export default function ArtistDetail() {
    const [active, setActive] = useState('works')
    return (
        <ArtistDetailCss>
            <div className="container">
                <Header />
                <ArtistNavbar active={active} setActive={setActive} />
                <Works active={active}/>
            </div>
        </ArtistDetailCss>
    )
}
