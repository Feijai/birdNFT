import React from 'react'
import styled from 'styled-components'
import p1 from '../../assets/artist01.jpg'

const HeaderCss = styled.div`
    img{
        max-height:264px;
    }
`

export default function Header() {
    return (
        <HeaderCss className="header row">
            <div className="art d-flex col-9">
                <img src={p1} alt="" />
                <div></div>
            </div>
            <div className="artdetil col-3">
                <div>
                    <span>販售中</span>
                    <h3></h3>
                </div>
                <div>
                    <span>地板價格</span>
                    <h3></h3>
                </div>
                <div>
                    <span>7 日成交</span>
                    <h3></h3>
                </div>
                <div>
                    <span>30 日成交</span>
                    <h3></h3>
                </div>
            </div>
        </HeaderCss>
    )
}
