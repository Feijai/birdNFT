import React, { useState } from 'react'
import styled from 'styled-components'
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import p1 from '../../assets/art29.jpg'
import p2 from '../../assets/art06.jpg'
import p3 from '../../assets/art03.jpg'
import p4 from '../../assets/art02.jpg'
import p5 from '../../assets/art21.jpg'
import p6 from '../../assets/art12.jpg'
import p7 from '../../assets/art14.jpg'
import p8 from '../../assets/art08.jpg'
import p9 from '../../assets/art28.jpg'
import p10 from '../../assets/art16.jpg'

const data = [
  { pic: p1, title: '追求者送我的花', value: "1,774.19", inDay: 220.49, sevenDay: -2.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p2, title: '夏天的時候', value: "1,524.89", inDay: 80.49, sevenDay: -2.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p3, title: '海洋波度', value: "1,400.59", inDay: -3.92, sevenDay: -13.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p4, title: '賴床真的很不好', value: "1,224.88", inDay: -9.23, sevenDay: -20.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p5, title: '瞳孔:流動的脈絡', value: "1,021.09", inDay: 83.49, sevenDay: -1.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p6, title: '哭泣的時候', value: "921.42", inDay: -9.43, sevenDay: 183.49, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p7, title: '破碎的菠蘿麵包', value: "888.88", inDay: 20.49, sevenDay: -0.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p8, title: '人生中的貓咪們', value: "700.23", inDay: 32.49, sevenDay: 30.23, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p9, title: '髒兮兮的家', value: "502.31", inDay: 13.49, sevenDay: 50.23, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
  { pic: p10, title: '細胞小將', value: "420.20", inDay: 54.49, sevenDay: -12.43, foolerVal: 2.90, ownerNum: 32.1, arts: 1000 },
]


interface TableRowProps {
  pic: string;
  title: string;
  value: string;
  inDay: number;
  sevenDay: number;
  foolerVal: number;
  ownerNum: number;
  arts: number;
  idx: number
}

const PicValueCss = styled.div`
  padding-top:2.5rem;
  padding-bottom:3rem;
  vertical-align: middle;
  .header{
    text-align:center;
    h1{
      font-size:3rem;
    }
    div{
      margin-top:1.5rem;
    }
  }
  .table{
    margin-top:3rem;
    border-spacing:0px;
  }
  td{
    font-size:1.25rem;
  }
  th{
    font-weight:500;
  }
  .idx{
    text-align:center;
    font-size:1.5rem;
  }
  .icon{
    font-size:15px;
  }
  .title{
    img{
      height:3rem;
      width:3rem;
      border-radius:50px;
    }
    span{
      vertical-align:middle;
    }
  }
  .add{
    height:2rem;
    width:2rem;
    bottom:-1px;
    right:-1px;
  }
  .triangleBottom{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 2rem 2rem;
        border-color: transparent transparent #000000 transparent;
        padding:0px;
  }
  .trianglePlus{
    color:white;
    bottom:1px;
    right:3px;
  }
  .addRow{
    row-gap:1rem;
    span{
      display:block;
    }
  }
  .head{
    font-size:14px;
  }
  .data{
    font-size:20px;
  }
  @media (max-width: 996px) {
    td{font-size:1rem;}
  }
  @media (max-width: 576px) {
    padding-top:1.5rem;
    padding-bottom:2.5rem;
  .header{
      h1{
        font-size:2rem;
      }
    }
  }
  .table{
    margin-top:2rem;
  }
`

const TableRow: React.FC<TableRowProps> = (data) => {
  const [clickAdd, setClickAdd] = useState(false)
  return (
    <>
      <tr className='border border-dark position-relative '>
        <th scope="row" className='idx ffPO border-end border-dark border-end border-dark'>{data.idx}</th>
        <td className='title'>
          <img src={data.pic} alt="" />
          <span className='ms-3 fw-bold'>{data.title}</span>
        </td>
        <td className='ffSO '>
          <FontAwesomeIcon icon={faBitcoinSign} className='icon me-2' />
          {data.value}
        </td>
        <td className='ffSO d-none d-lg-table-cell' style={data.inDay > 0 ? { color: '#53C139' } : { color: '#E6553B' }}>
          {data.inDay > 0 ? `+${data.inDay}%` : `${data.inDay}%`}
        </td>
        <td className='ffSO d-none d-lg-table-cell' style={data.sevenDay > 0 ? { color: '#53C139' } : { color: '#E6553B' }}>
          {data.sevenDay > 0 ? `+${data.sevenDay}%` : `${data.sevenDay}%`}
        </td>
        <td className='ffSO d-none d-lg-table-cell'>
          <FontAwesomeIcon icon={faBitcoinSign} className='icon me-2' />
          {data.foolerVal}
        </td>
        <td className='ffSO d-none d-lg-table-cell'>{`${data.ownerNum}K`}</td>
        <td className='ffSO d-none d-lg-table-cell'>{data.arts}</td>
        <button className="add position-absolute p-0 d-lg-none"
          onClick={() => { setClickAdd(!clickAdd) }}>
          <div className='position-relative w-100 h-100'>
            <div className='triangleBottom position-absolute bottom-0 end-0' />
            <div className='trianglePlus position-absolute'>+</div>
          </div>
        </button>
      </tr>
      <tr className={clickAdd ? 'border border-dark d-lg-none' : 'd-none'}>
        <td colSpan={3} className="p-3 text-center">
          <div className="row justify-content-center addRow">
            <div className='col-4'>
              <span className='head'>24h%</span>
              <span className='mt-2 data ffSO' style={data.inDay > 0 ? { color: '#53C139' } : { color: '#E6553B' }}>
                {data.inDay > 0 ? `+${data.inDay}%` : `${data.inDay}%`}
              </span>
            </div>
            <div className='col-4'>
              <span className='head'>7d%</span>
              <span className='mt-2 data ffSO' style={data.sevenDay > 0 ? { color: '#53C139' } : { color: '#E6553B' }}>
                {data.sevenDay > 0 ? `+${data.sevenDay}%` : `${data.sevenDay}%`}
              </span>
            </div>
            <div className='col-4'>
              <span className='head'>地板價</span>
              <span className='mt-2 data ffSO'>
                <FontAwesomeIcon icon={faBitcoinSign} className='icon me-2' />
                {data.foolerVal}
              </span>
            </div>
            <div className='col-4'>
              <span className='head'>擁有者</span>
              <span className='mt-2 data ffSO'>{`${data.ownerNum}K`}</span>
            </div>
            <div className='col-4'>
              <span className='head'>作品數量</span>
              <span className='mt-2 data ffSO'>{data.arts}</span>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}



export default function PicValue() {

  return (
    <PicValueCss>
      <div className="container">
        <div className="header">
          <h1 className='mb-0 fw-bold'>市價排行榜</h1>
          <div className='text'><span>NFT系列藝術作品排行榜！全球注目指標</span></div>
        </div>
        <table className="table ">
          <thead className='border-bottom border-dark '>
            <tr className='d-none d-lg-table-row'>
              <th scope="col"></th>
              <th scope="col">系列作品名稱</th>
              <th scope="col">價值</th>
              <th scope="col">24h%</th>
              <th scope="col">7d%</th>
              <th scope="col">地板價</th>
              <th scope="col">擁有者</th>
              <th scope="col">作品數量</th>
            </tr>
          </thead>
          <tbody className="bg-white align-middle">
            {data.map((ele, idx) => (
              <TableRow key={idx} idx={idx} {...ele} />
            ))}
          </tbody>
        </table>
      </div>
    </PicValueCss >
  )
}
