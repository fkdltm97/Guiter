import React from 'react'
import styled from 'styled-components'

function Test() {
    return (
        <Main>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Main>
    )
}

export default Test

const Main = styled.div`
    background-color: skyblue;
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

const Box = styled.div`
    background-color: bisque;
    width: 100px;
    height: 100px;
    border: 2px solid black; 
    margin : 2px
`