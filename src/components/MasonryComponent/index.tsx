import React, { useState } from 'react'
import styled from 'styled-components';
// Masonry layout
import Masonry from "react-masonry-component";
import MasonryCard from './MasonryCard'

import p1 from '../../assets/art09.jpg'
import p2 from '../../assets/art10.jpg'
import p3 from '../../assets/art02.jpg'
import p4 from '../../assets/art11.jpg'
import p5 from '../../assets/art12.jpg'
import p6 from '../../assets/art03.jpg'
import p7 from '../../assets/art04.jpg'
import p8 from '../../assets/art27.jpg'
import p9 from '../../assets/art19.jpg'
import p10 from '../../assets/art16.jpg'
import p11 from '../../assets/art15.jpg'
import p12 from '../../assets/art06.jpg'

export const data = [{ img: p1, title: '區塊戀-他的私生活', text: '不想生活', money: 350 },
{ img: p2, title: '夏娃的醜聞', text: '唯一想擁有的人,唯一不可擁有的', money: 300 },
{ img: p3, title: '藍色啤酒海', text: '啤酒很胖', money: 399 },
{ img: p4, title: '沒有人愛我', text: '自己愛自己', money: 400 },
{ img: p5, title: '不哭不哭眼淚是珍珠', text: '珍珠還能賣錢', money: 450 },
{ img: p6, title: '十分鐘就到', text: '車水馬龍', money: 200 },
{ img: p7, title: '我這樣有美嗎', text: '優雅時尚長風衣', money: 150 },
{ img: p8, title: '我真的受傷了', text: '羽毛骨折', money: 180 },
{ img: p9, title: '野小孩——叫你不要玩那個', text: '熊孩子', money: 180 },
{ img: p10, title: '柔美的細胞小將', text: '細胞有夠圓的拉', money: 180 },
{ img: p11, title: '心如止水——今天吃素', text: '吃花的女人', money: 180 },
{ img: p12, title: '每當夏天我吹著溫暖的風', text: '好想喝椰子水', money: 150 },

]


interface MasonryComponentProps {
    num: 'all' | number;
}

const MasonryComponent: React.FC<MasonryComponentProps> = ({ num }) => {
     //為了渲染
    const [wd, setWd] = useState(window.innerWidth)
    window.addEventListener('resize', (ele) => {
        setWd(window.innerWidth)
    })
    return (
        <>
            {/* @ts-ignore */}
            <Masonry className="row arts position-relative" >
                {
                    data.map((ele, idx) => {
                        return (
                            num === 'all' ?
                                <React.Fragment key={idx}>
                                    <MasonryCard {...ele} />
                                </React.Fragment> :
                                num > idx && (
                                    < React.Fragment key={idx} >
                                        <MasonryCard {...ele} />
                                    </React.Fragment>)
                        )
                    })
                }
            </Masonry></>
    )
}

export default MasonryComponent