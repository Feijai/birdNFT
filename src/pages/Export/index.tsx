import React from 'react'
import styled from 'styled-components'
import MasonryComponent from '../../components/MasonryComponent'

const ExportCss = styled.div`
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

export default function Export() {
    return (
        <ExportCss>
            <div className="container">
                <MasonryComponent num={'all'} />
            </div>
        </ExportCss>
    )
}
