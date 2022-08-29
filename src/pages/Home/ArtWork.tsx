import React from 'react'
import styled from 'styled-components'
import ArtTitle from '../../components/ArtTitle'
import p1 from '../../assets/art09.jpg'
import p2 from '../../assets/art10.jpg'
import p3 from '../../assets/art02.jpg'
import p4 from '../../assets/art11.jpg'
import p5 from '../../assets/art12.jpg'
import p6 from '../../assets/art03.jpg'
import p7 from '../../assets/art04.jpg'
import p8 from '../../assets/art27.jpg'



const data = [{ img: p1, title: '區塊戀-他的私生活', text: '不想生活', money: 350 },
{ img: p2, title: '夏娃的醜聞', text: '唯一想擁有的人,唯一不可擁有的', money: 300 },
{ img: p3, title: '藍色啤酒海', text: '不想生活', money: 399 },
{ img: p4, title: '沒有人愛我', text: '唯一想擁有的人,唯一不可擁有的', money: 400 },
{ img: p5, title: '不哭不哭眼淚是珍珠', text: '不想生活', money: 450 },
{ img: p6, title: '十分鐘就到', text: '唯一想擁有的人,唯一不可擁有的', money: 200 },
{ img: p7, title: '我這樣有美嗎', text: '不想生活', money: 150 },
{ img: p8, title: '我真的受傷了', text: '唯一想擁有的人,唯一不可擁有的', money: 180 },
]

const ArtWorkCss = styled.div`
    .arts{
        border-top:1px solid black;
        padding-bottom:80px;
    }
    @media (max-width:576px ) {
        .arts{
            padding-bottom:48px;
        }
    }
`

interface ArtWorkCardProps {
    img: string;
    title: string;
    text: string;
    money: number;
}

const ArtWorkCardCss = styled.div`
    
`

const ArtWorkCard: React.FC<ArtWorkCardProps> = (data) => {
    return (
        <ArtWorkCardCss className='col-4'>

        </ArtWorkCardCss>
    )
}

export default function ArtWork() {
    return (
        <ArtWorkCss>
            <ArtTitle title='Artwork' text='最新藝術品' />
            <div className="container">
                <div className="row arts pt-4 pt-sm-5">
                    {
                        data.map((ele, idx) => (
                            <React.Fragment key={idx}>
                                <ArtWorkCard {...ele} />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </ArtWorkCss>
    )
}
