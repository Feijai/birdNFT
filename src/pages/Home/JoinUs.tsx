import React from 'react'
import styled from 'styled-components'
import { faWallet, faPenRuler, faIcons, faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

const data = [{ icon: faWallet, title: '設置你的錢包', text: ['設置好您選擇的錢包後', '點擊右上角的錢包圖標進行連接'] },
{ icon: faPenRuler, title: '創建您的主頁', text: ['註冊成為會員，編輯您的資料', '讓大家了解你'] },
{ icon: faIcons, title: '添加你的 NFT', text: ['上傳你的作品', '添加標題和描述'] },
{ icon: faTags, title: '列出它們出售', text: ['選擇出售 NFT 的方式', '並設定價格，等待有緣人'] },
]

const JoinUsCss = styled.div`
    .createArt{
        border-top:1px solid black;
    }
    hr{
        margin-top:2rem;
    }
    @media (max-width:576px) {
        h2{
            font-size:2rem;
        }
        .createArt{
            flex-direction:column;
            padding:3rem 0.75rem;
            row-gap:3rem;
        }
    }

`

const JoinUsCardCss = styled.div`
    .icon{
        color:#E6553B;
        font-size:40px;
    }
    h3{
        font-size:18px;
    }
    @media (max-width: 576px) {
        align-self: center;
    }
`

interface JoinUsCardProps {
    icon: IconDefinition;
    title: string;
    text: string[];
}

const JoinUsCard: React.FC<JoinUsCardProps> = (data) => {
    return (<JoinUsCardCss className='col-sm-3 textCenter'>
        <FontAwesomeIcon icon={data.icon} className='icon' />
        <h3 className='mt-3 mb-0 fw-bold'>{data.title}</h3>
        <span className='d-block mt-4'>{data.text.map((ele, idx) => (
            <React.Fragment key={idx}>
                {ele}
                {data.text.length - 1 > idx && <br />}
            </React.Fragment>
        ))}</span>

    </JoinUsCardCss>)
}


export default function JoinUs() {
    return (
        <JoinUsCss>
            <div className='textCenter'>
                <h2 className='mb-3 fsTitle ffSO '>Join Us</h2>
                <span className="text fs-5 fw-bold">創建並出售你的藝術品</span>
            </div>
            <hr className='hrFooter mt-sm-5 mb-0' />
            <div className="createArt mt-2 py-80 px-72 d-flex">
                {data.map((ele, idx) => {
                    return (
                        <JoinUsCard key={idx} {...ele} />
                    )
                })}

            </div>
        </JoinUsCss>
    )
}
