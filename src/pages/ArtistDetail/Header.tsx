import React from 'react'
import styled from 'styled-components'
import p1 from '../../assets/artist01.jpg'
import discord from './discord.svg'
import facebook from './facebook.svg'
import globe from './globe.svg'
import twitter from './twitter.svg'

const HeaderCss = styled.div`
    .header{
        height:264px; 
    }
    img{
        height:100%
    }
    .contact{
        h2{
            font-size:3rem;
        }
        width:88px;
        img{
            max-height:1rem;
        }
    }
    .artdetil{
        div{
            height:25%;
            padding:0px 1.5rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        span{
            font-weight:bold;
        }
        h3{
            font-size:2rem;
            font-family:"Squada One";
        }
    }
    @media (max-width: 1200px) {
        .header{
            height:100%;
        }
        img{
            width:100%;
        }
        
    }
`

const data = {
    pic: p1,
    name: 'Michael',
    id: '0x3ya666…88ef',
    text: 'Michael自小在山林長大，能夠與花草樹木大自然進行靈體溝通，創作題材常見大山、大水、花草與樹木，從日常生活出發，擁有個⼈獨樹⼀格的創作風格，作品觸及靈魂深處、探索未知宇宙，透過與大自然的溝通，探討著存在的本質。',
    sell: 168,
    fooler: 0.6,
    sevenDays: 8.8,
    week: 23.1
}

export default function Header() {
    return (
        <HeaderCss className="row d-block d-xl-flex">
            <div className="art d-xl-flex col-xl-9 header">
                <img src={data.pic} alt="" />
                <div className='p-4 bg-white border border-dark'>
                    <div className='d-flex justify-content-between'>
                        <h2 className='ffSO'>{data.name}</h2>
                        <div className="contact d-flex justify-content-between align-items-center">
                            <img src={discord} alt="" />
                            <img src={facebook} alt="" />
                            <img src={globe} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                    <div className="id mt-3 ffSO">{data.id}</div>
                    <div className="text mt-4">
                        <span>{data.text}​</span>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 header mt-3 mt-xl-0 ">
                <div className='artdetil border border-dark h-100 bg-white'>
                    <div className='border-bottom border-dark'>
                        <span>販售中</span>
                        <h3>{data.sell}</h3>
                    </div>
                    <div className='border-bottom border-dark'>
                        <span>地板價格</span>
                        <h3>{`${data.fooler} ETG`}</h3>
                    </div>
                    <div className='border-bottom border-dark'>
                        <span>7 日成交</span>
                        <h3>{`${data.sevenDays} ETH`}</h3>
                    </div>
                    <div>
                        <span>30 日成交</span>
                        <h3 className=''>{`${data.week} ETH`}</h3>
                    </div>
                </div>
            </div>
        </HeaderCss>
    )
}
