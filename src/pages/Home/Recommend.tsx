import React from 'react'
import styled from 'styled-components'
import { MoreBtn2 } from '../../components/MoreBtn'
import p1 from '../../assets/art01.jpg'
import p2 from '../../assets/art02.jpg'
import p3 from '../../assets/art21.jpg'

const data = [
    { id: 1, pic: p1, name: 'Kemus Wu', title: '瞳孔:流動的脈絡', text: '眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。' },
    { id: 2, pic: p2, name: 'Joanne', title: '海洋波度', text: '海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。' },
    { id: 3, pic: p3, name: 'Michael', title: '我家窗前的鳥', text: '家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。' },
]

interface RecommendCardProps {
    id: number;
    pic: string;
    name: string;
    title: string;
    text: string;
}

const RecommendCss = styled.div`
    .container{
        padding-top:2.5rem;
        padding-bottom:5rem;
    }
    @media (max-width:992px) {
        .container{
            padding-top:0px;
            padding-bottom:2.5rem
        }
    }
`

const RecommendCardCss = styled.div`
    height:500px;
    .recommend{
        padding:24px;
        width:7.7101%;
        background-color:black;
        color:white;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr ;
        .title{
            font-size:3rem;
        }
        .title2{
            font-size:1.25rem;
        }
    }
    .pic{
        width:756px;
    }
    img{
        object-fit:cover;
        object-position:center center;
    }
    .contain{
        padding:80px 24px 0px 24px;
        .name{
            font-size:18px;
        }
        h2{
            margin-top:0.5rem;
            font-size:3rem;
        }
        .text{
            margin-top:1.5rem;
        }
    }
    @media (max-width: 992px) {
        height:auto;
        .pic{
            width:100%;
        }
        .contain{
            height:257px;
            padding:2rem 0.75rem 0px 0.75rem;
            h2{
                font-size:1.5rem;
            }
        }
    }
`
const RecommendCardCss2 = styled.div`
    height:340px;
    flex-direction: row-reverse;
    img{
        object-fit:cover;
        object-position:center center;
    }
    .pic{
        width:100%;
    }
    .contain{
        width:100%;
        padding:48px 24px 0px 24px;
        .name{
            font-size:18px;
        }
        h2{
            margin-top:0.5rem;
            font-size:2rem;
        }
        .text{
            margin-top:1.5rem;
        }
    }
    @media (max-width: 992px) {
        height:auto;
        .pic{
            width:100%;
        }
        .contain{
            height:273px;
            padding:2rem 0.75rem 0px 0.75rem;
            h2{
                font-size:1.5rem;
            }
        }
    }
    @media (max-width: 576px) {
        .pic{
            height:372px;
        }
    }
`

const RecommendCard: React.FC<RecommendCardProps> = (data) => {
    return (
        <>
            {
                data.id === 1 ? (
                    <RecommendCardCss className='d-block d-lg-flex col-12 border border-dark px-0 '>
                        <div className="recommend align-items-center d-none d-lg-flex">
                            <h2 className='title ffSO fw-bold'>Recommend</h2>
                            <h3 className='title2 mt-3'>推 薦 系 列</h3>
                        </div>
                        <div className="pic">
                            <img src={data.pic} alt="" className='w-100 h-100' />
                        </div>
                        <div className='contain w-100 position-relative bg-white'>
                            <div><span className='name ffSO'>{data.name}</span></div>
                            <div><h2 className='mb-0'>{data.title}</h2></div>
                            <div className='text'><span >{data.text}</span></div>
                            <MoreBtn2 bottom='1.5rem' right='1.5rem' />
                        </div>
                    </RecommendCardCss>
                ) :
                    <RecommendCardCss2 className='d-block d-lg-flex col-12 col-lg-6 border border-dark px-0'>
                        <div className="pic">
                            <img src={data.pic} alt="" className='w-100 h-100' />
                        </div>
                        <div className='contain position-relative bg-white'>
                            <div><span className='name ffSO '>{data.name}</span></div>
                            <div><h2 className='mb-0 fw-bold'>{data.title}</h2></div>
                            <div className='text'><span >{data.text}</span></div>
                            <MoreBtn2 bottom='1.5rem' right='1.5rem' />
                        </div>

                    </RecommendCardCss2>
            }
        </>
    )
}

export default function Recommend() {
    return (
        <RecommendCss >
            <div className="container">
                <div className="row">
                    {data.map((ele, idx) => (
                        <RecommendCard key={idx} {...ele} />
                    ))}
                </div>
            </div>
        </RecommendCss>
    )
}
