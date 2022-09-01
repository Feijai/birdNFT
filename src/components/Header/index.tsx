import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import LogoPhone from './LogoPhone'
import { faMagnifyingGlass, faWallet, faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const HeaderCss = styled.div`
  border-bottom:1px solid black;
  background-color:#F0F0F0;
  top:0;
  position:fixed;
  width:100%;
  z-index:10;
  a{
    text-decoration: none;
    color:black;
  }
  
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
      margin-left:1.5rem;
    }
  }
  .collapse{
    button{
      font-size:18px;
      font-weight:bold;
      padding:24px 0px;
      border-right:1px solid black;
      border-left:1px solid black;
    }
    .walletBtn{
      background-color:#E6553B;
      color:white;
    }
  }
  

  @media (max-width:992px) {
    .logo{
      padding-top:1rem;
      padding-bottom:1rem;
    }
    .search{
      padding:0px;
      border-left:none;
      margin-left:1rem;
      button{
        margin-left:0px;
      }
    }
  }
  @media (max-width: 576px) {
    .logoSearch{
        height:18px;
        background-color:inherit;
        padding:0px; 
        border:0px;
    }
    .collapse{
      button{
        border-right:0px;
        border-left:0px;
      }
      .exportBtn{
        border-bottom:1px solid black;
      }
      .walletBtn{
        padding:12px 0;
      }
    }
  }

`

export default function Header() {
  const [search, setSearch] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
    <HeaderCss>
      <div className="container d-flex">
        <Link className={!search ? "logo col d-flex" : "logo col d-none d-lg-flex"} to='/'>
          <Logo />
          <LogoPhone />
        </Link>
        <div className={search ? "d-flex d-lg-none col py-3" : "d-none"}>
          <button onClick={() => { setSearch(false) }} className='d-flex align-items-center p-0'>
            <FontAwesomeIcon icon={faChevronLeft} style={{ width: '18px', height: '18px' }} />
          </button>
          <input type="text" className="form-control logoSearch ms-3" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
            placeholder='搜尋作品名稱、藝術家名稱'
          />
        </div>

        <div className="search navbar col-lg-4 HBDLeft col-1">
          <input type="text" placeholder='搜尋作品名稱、藝術家名稱' className='HeaderInput d-none d-lg-block' />
          <button className='d-none d-lg-block'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '24px', height: '24px' }} /></button>
        </div>
        <Link to='/' className="export col-1 HBDLeft d-lg-flex justify-content-center align-items-center d-none">
          <span className='Fbold'>探索</span>
        </Link>
        <Link to='/picvalue' className="vlaue col-1 HBDLeft d-lg-flex justify-content-center align-items-center d-none">
          <span className='Fbold'>市值</span>
        </Link>
        <div className="wallet col-1 HBDLeft d-lg-flex justify-content-end d-none">
          <button className='HovBtn'><FontAwesomeIcon icon={faWallet} style={{ width: '24px', height: '24px' }} /></button>
        </div>
        <div className='d-lg-none justify-content-end d-flex'>
          <button style={{ marginRight: '12px' }} onClick={() => { setSearch(!search) }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '18px', height: '18px' }} />
          </button>
          <button onClick={() => { setMenu(!menu) }} >
            <FontAwesomeIcon icon={faBars} style={{ width: '21px', height: '18px' }} />
          </button>
        </div>
      </div>
      <div className={menu ? "collapse show  bg-white" : "collapse"} >
        <div className="container">
          <button className='exportBtn col-12 col-sm-4 m-0'><span>探索</span></button>
          <button className='valueBtn col-12 col-sm-4 m-0'><span>市值</span></button>
          <button className='walletBtn col-12 col-sm-4 m-0'><span>連結錢包</span></button>
        </div>
      </div>
    </HeaderCss>
  )
}
