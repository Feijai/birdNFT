import React from 'react'
import styled from 'styled-components'

const ArtistNavbarCss = styled.div`
  max-height:83px;
  margin-top:5rem;
  .artWork{
    padding:0px 3rem;
    width:365px;
  }
  .collect{
    padding:0px 3rem;
    width:348px;
  }
  h2{
    font-size:3rem;
  }
  .text{
    font-size:20px;
    font-weight:bold;
    align-self:end;
    width:auto;
  }
`

export default function ArtistNavbar() {
  return (
    <ArtistNavbarCss className='d-flex'>
      <div className='artWork '>
        <h2 className='ffSO mb-0'>Art Works</h2>
        <span className='text ms-3'>系列作品</span>
      </div>
      <div className='collect '>
        <h2 className='ffSO mb-0'>Collection</h2>
        <span className='text ms-3'>收藏品</span>
      </div>
      <div className='w-100'></div>
    </ArtistNavbarCss>
  )
}
