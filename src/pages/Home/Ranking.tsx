import React, { useState } from 'react'
import styled from 'styled-components'
import ArtTitle from '../../components/ArtTitle'
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import p1 from '../../assets/art04.jpg'
import p2 from '../../assets/art05.jpg'
import p3 from '../../assets/art06.jpg'
import p4 from '../../assets/art07.jpg'
import p5 from '../../assets/art08.jpg'
import p6 from '../../assets/art09.jpg'

const data = [{ pic: p1, name: '散步遇到的女人', art: "Zoe Jiang", bit: 300, rank: 1 },
{ pic: p2, name: '爆炸頭的母親', art: "Yui", bit: 300, rank: 2 },
{ pic: p3, name: '夏天的時候', art: "Bug Lin", bit: 300, rank: 3 },
{ pic: p4, name: '追求者送我的花', art: "Michael", bit: 300, rank: 4 },
{ pic: p5, name: '今天釣到的魚', art: "Wei JJ", bit: 300, rank: 5 },
{ pic: p6, name: '人生中的貓咪們', art: "Even Lai", bit: 300, rank: 6 },
]

const RankingCss = styled.div`
    .container{
        border-top:1px solid black;
        padding-top:3rem;
        padding-bottom:5rem;
    }
    .row{
        row-gap:1.5rem;
    }
    @media (max-width: 576px) {
        .container{
            padding-top:2.5rem;
            padding-bottom:2.5rem;
        }
    }
`
interface RankingCardProps {
    pic: string;
    name: string;
    art: string;
    bit: number;
    rank: number;
    sm: boolean;
}

const RankingCardCss = styled.div<{ img: string }>`
    row-gap:1.5rem;
    .imgBox{
        background-image:url(${(props) => (props.img)});
        background-position:top center;
        background-size:cover;
        width:100%;
        height:374px;
    }
    .rank{
        width:4rem;
        height:4rem;
        font-size:2rem;
    }
    .title{
        font-size:18px;
    }
`

const RankingCardCss2 = styled.div`
    row-gap:1.5rem;
    height:91px;
    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
    .rank{
        padding:1.5rem 1rem;
        font-size:2rem;
    }
    .title{
        height:63.736%;
        font-size:18px;
        border-bottom:1px solid black;
    }
`

const RankingCard: React.FC<RankingCardProps> = (data) => {
    return (
        <>
            {data.sm && data.rank < 4 ? (
                <RankingCardCss className='col col-lg-4' img={data.pic} >
                    <div className='imgBox position-relative border border-dark'>
                        <div className='rank bg-white position-absolute d-flex justify-content-center align-items-center top-0 start-0 border border-dark'>
                            <span className='ffPO'>{data.rank}</span>
                        </div>
                    </div>
                    <div className='border border-dark title p-3 fw-bold'>
                        <span>{data.name}</span>
                    </div>
                    <div className='border border-dark d-flex justify-content-between px-3 py-2 ffSO'>
                        <span>{data.art}</span>
                        <div>
                            <FontAwesomeIcon icon={faBitcoinSign} className='icon' />
                            <span className='ms-2'>{data.bit}</span>
                        </div>
                    </div>
                </RankingCardCss>) : (
                <RankingCardCss2 className='col-12 col-lg-6 col-xl-4 d-flex '>
                    <div className='rank bg-white d-flex justify-content-center align-items-center border border-dark'>
                        <span className='ffPO'>{data.rank}</span>
                    </div>
                    <div style={{ width: '87px' }}><img src={data.pic} alt="" className='border border-dark' /></div>

                    <div className='border border-dark  bg-white w-100 h-100'>
                        <div className='title p-3 fw-bold'>
                            <span>{data.name}</span>
                        </div>
                        <div className='detail d-flex justify-content-between px-3 py-1 ffSO'>
                            <span>{data.art}</span>
                            <div>
                                <FontAwesomeIcon icon={faBitcoinSign} className='icon' />
                                <span className='ms-2'>{data.bit}</span>
                            </div>
                        </div>
                    </div>
                </RankingCardCss2>
            )
            }
        </>
    )
}

export default function Ranking() {
    const [sm, setSm] = useState(window.innerWidth > 576)
    window.addEventListener('resize', () => (
        window.innerWidth > 576 ? setSm(true) : setSm(false)
    ))
    return (
        <>
            <ArtTitle title='Ranking' text='市價排行榜' />
            <RankingCss >
                <div className="container">
                    <div className="row">
                        {
                            data.map((ele, idx) => (
                                <RankingCard {...ele} sm={sm} />
                            ))
                        }
                    </div>
                </div>
            </RankingCss>
        </>
    )
}
