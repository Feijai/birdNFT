import React from 'react'
import styled from 'styled-components'
import Artist from './Artist'
import ArtWork from './ArtWork'
import JoinUs from './JoinUs'
import Ranking from './Ranking'
import Recommend from './Recommend'

const HomeCss = styled.div`
    
`

export default function Home() {
  return (
    <HomeCss>
      <Recommend />
      <Ranking />
      <Artist />
      <ArtWork />
      <JoinUs />
    </HomeCss>
  )
}
