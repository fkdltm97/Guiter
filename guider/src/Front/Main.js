import React from 'react'
import MainHeader from './MainCompo/MainHeader'
import Mainbody from './MainCompo/Mainbody'
import Mainfooter from './MainCompo/Mainfooter'
import Mainbody2 from './MainCompo/Mainbody2'
import Mainbody3 from './MainCompo/Mainbody3'
import Mainbody4 from './MainCompo/Mainbody4'

import styled from 'styled-components'

export default function Main() {


    return (

        <div>
            <Container>
                <MainHeader />
                <Mainbody />
                <Mainbody2 />
                <Mainbody3 />
                <Mainbody4 />
                <Mainfooter />
            </Container>
        </div>
    )
}

const Container = styled.div`
    
`