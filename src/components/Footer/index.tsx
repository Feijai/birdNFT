import React from 'react'
import styled from 'styled-components'

const FooterCss = styled.div`
  border-top:1px solid black;
`

export default function Footer() {
  return (
    <FooterCss>
      <hr className='hrFooter mt-2 mb-0'/>
      <div className="container d-flex justify-content-center align-items-center py-4">© ART NFT. All Rights Reserved</div>
    </FooterCss>
  )
}
