import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import LogoPhone from './LogoPhone'
import { faMagnifyingGlass, faWallet, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderCss = styled.div`
  border-bottom:1px solid black;
  background-color:#F0F0F0;
  top:0;
  position:fixed;
  width:100%;
  z-index:10;
  .logo{
    padding-top:2rem;
    padding-bottom:2rem;
  }
  .search{
    padding:0 3rem;
    input{
      width:66.67%;
      border:none;
      background-color:transparent;
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #808080;
      }
    }
    button{
      margin-left:24px;
    }
  }
  @media (max-width:992px) {
    .search{
      padding:0px;
      border-left:none;
      margin-left:16px;
      button{
        margin-left:0px;
      }
    }
  }
  @media (max-width: 576px) {
    .logo{
      padding-top:1rem;
      padding-bottom:1rem;
    }
  }
`

export default function Header() {
  return (
    <HeaderCss>
      <div className="container d-flex">
        <div className="logo col  d-flex">
          <Logo />
          <LogoPhone />
        </div>
        <div className="search navbar col-lg-4 HBDLeft col-1">
          <input type="text" placeholder='搜尋作品名稱、藝術家名稱' className='HeaderInput d-none d-lg-block' />
          <button className='d-none d-lg-block'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '24px', height: '24px' }} /></button>
        </div>
        <div className="export col-1 HBDLeft d-lg-flex justify-content-center align-items-center d-none">
          <button className='Fbold'>探索</button>
        </div>
        <div className="vlaue col-1 HBDLeft d-lg-flex justify-content-center align-items-center d-none">
          <button className='Fbold'>市值</button>
        </div>
        <div className="wallet col-1 HBDLeft d-lg-flex justify-content-end d-none">
          <button className='HovBtn'><FontAwesomeIcon icon={faWallet} style={{ width: '24px', height: '24px' }} /></button>
        </div>
        <div className='d-lg-none justify-content-end d-flex'>
          <button style={{marginRight:'12px'}}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '18px', height: '18px' }} /></button>
          <button><FontAwesomeIcon icon={faBars} style={{ width: '21px', height: '18px' }} /></button>
        </div>
      </div>
    </HeaderCss>
  )
}
