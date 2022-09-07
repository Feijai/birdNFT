import React from 'react'
import styled from 'styled-components'


const ArtistNavbarCss = styled.div<{ active: string }>`
  height:83px;
  margin-top:5rem;
  .artWork{
    width:28.164%;
    border:${(props) => (props.active === 'works' ? '1px solid black' : "none")};
    border-bottom:${(props) => (props.active === 'works' ? 'none' : '1px solid black')};
    h2{
      white-space:nowrap
    }
    span{
      align-self: center;
    }
  }
  .collect{
    width:26.852%;
    border:${(props) => (props.active === 'collects' ? '1px solid black' : "none")};
    border-bottom:${(props) => (props.active === 'collects' ? 'none' : '1px solid black')};
    span{
      align-self: center;
    }
  }
  h2{
    font-size:3rem;
    align-self: center;
  }
  .text{
    font-size:20px;
    font-weight:bold;
    align-self:end;
    width:auto;
  }
  .lastBorder{
    width:44.984%;
  }
  @media (max-width: 768px) {
    margin-top:2.5rem;
    .artWork{
      width:44.047%;
    }
    .collect{
      width:44.642%
    }
    .lastBorder{
      width:11.311%;
    }
  }
  @media (max-width: 572px) {
    height:66px;
    h2{
      font-size:2rem;
    }
  }
`
interface ArtistNavbarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>
}

const ArtistNavbar: React.FC<ArtistNavbarProps> = (props) => {
  const { active, setActive } = props
  return (
    <ArtistNavbarCss className='d-flex' active={active}>
      <div className='artWork d-flex justify-content-center h-100'
        onClick={() => { setActive('works') }}>
        <h2 className='ffSO mb-0 d-flex'>Art Works</h2>
        <span className='text ms-3 d-none d-xl-block'>系列作品</span>
      </div>
      <div className='collect d-flex justify-content-center h-100'
        onClick={() => { setActive('collects') }}>
        <h2 className='ffSO mb-0 d-flex'>Collection</h2>
        <span className='text ms-3 d-none d-xl-block'>收藏品</span>
      </div>
      <div className='border-bottom border-dark h-100 lastBorder'></div>
    </ArtistNavbarCss>
  )
}


export default ArtistNavbar