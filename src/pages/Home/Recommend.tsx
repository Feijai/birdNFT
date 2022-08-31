import React from 'react'
import styled from 'styled-components'
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
        padding-bottom:5rem
    }

`

const RecommendCardCss = styled.div`
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
`

const RecommendCard: React.FC<RecommendCardProps> = (data) => {
    return (
        <RecommendCardCss>
            {
                data.id === 1 && <div className='d-flex col-12 '>
                    <div className="recommend">
                        <span className='title ffSO'>Recommend</span>
                        <span className='title2 mt-3'>推 薦 系 列</span>
                    </div>
                </div>
            }
        </RecommendCardCss>
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
