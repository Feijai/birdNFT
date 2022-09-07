import React from 'react'
import styled from 'styled-components'
import WorkCard from './WorkCard';
import p1 from '../../../assets/art13.jpg'
import p2 from '../../../assets/art14.jpg'
import p3 from '../../../assets/art29.jpg'
import p4 from '../../../assets/art30.jpg'
import p5 from '../../../assets/art20.jpg'
import p6 from '../../../assets/art21.jpg'
import p7 from '../../../assets/art22.jpg'
import p8 from '../../../assets/art23.jpg'
import MasonryComponent from '../../../components/MasonryComponent';

const data = [{
    title: '追求者送我的花', text: '我又沒有特別喜歡花，為什麼不給我現金就好，擺在那也不知道要幹嘛，只好畫起來看有沒有人要買，阿不然如果真的喜歡我，把這些都買回去八。',
    pic: [p1, p2, p3, p4]
}, {
    title: '我家窗前的鳥', text: '家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。',
    pic: [p5, p6, p7, p8]
}

]

interface WorksProps {
    active: string;
}

const WorksCss = styled.div<{ display: boolean }>`
    margin-top:${(props) => (props.display ? '2.5rem' : '0px')};
    margin-bottom:${(props) => (props.display ? '128px' : '80px')};
    display:${(props) => (props.display ? 'flex' : 'block')};
    row-gap:5.5rem;
    flex-direction: column;
    @media (max-width: 992px) {
        row-gap:1rem;
    }
`

const Works: React.FC<WorksProps> = (props) => {
    return (
        <>
            <WorksCss display={props.active === 'works'}>
                {props.active === 'works' ?
                    <>
                        <WorkCard {...data[0]} />
                        <WorkCard {...data[1]} />
                    </> :
                    <MasonryComponent num={8} />
                }
            </WorksCss>

        </>
    )
}


export default Works