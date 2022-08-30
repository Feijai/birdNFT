import React from 'react'
import styled from 'styled-components'
import Artist from './Artist'
import ArtWork from './ArtWork'
import JoinUs from './JoinUs'

const HomeCss = styled.div`
    
`

export default function Home() {
  return (
    <HomeCss>
        <Artist />
        <ArtWork />
        <JoinUs />
    </HomeCss>
  )
}
