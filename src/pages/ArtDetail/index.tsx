import React from 'react'
import styled from 'styled-components'
import p1 from '../../assets/art21.jpg'

const ArtDetailCss = styled.div`
    img{
        height:546px;
    }
    .head{
        height:546px;
    }
`

const ArtDetail = () => {
    return (
        <ArtDetailCss className='container'>
            <div className="row">
                <img src={p1} alt="" className='col-12 col-sm-6'/>
                <div className="head col-12 col-sm-6">
                    <div className="title ">
                        <h1>兩情相悅</h1>
                        <div className="user">Michael</div>
                    </div>
                </div>
            </div>
        </ArtDetailCss>
    )
}


export default ArtDetail