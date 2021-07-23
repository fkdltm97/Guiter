import React from 'react'
import styled from 'styled-components'

function MainHeader() {
    return (
        <Header>
            <Aline href="#" target='_blank'>GUIDER의 코로나19 대응 방안에 대한 최신 정보를 확인하세요</Aline>
        </Header>
    )
}

export default MainHeader


const Header = styled.header`
width: 100%;
height: 70px;
background-color: #222222;
display: flex;
justify-content: center;
align-items: center;
`

const Aline = styled.a`
    color: #898989;

    :hover{
        color: #525b5b;
    }
`