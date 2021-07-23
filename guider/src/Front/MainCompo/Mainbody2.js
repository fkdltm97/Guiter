import React from 'react'
import styled from 'styled-components'

function Mainbody2() {
    return (
        <Container>
           <Part1>
                HOT spot in Korea  .... THE JEJU....
           </Part1>
           <Part2>
                <iframe width="675" height="380" src="https://www.youtube.com/embed/n_fl5Ewd1_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="675" height="380" src="https://www.youtube.com/embed/S2Csc28q-U0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </Part2>
           
        </Container>
    )
}

export default Mainbody2

const Container = styled.div`
    background-color: white;
    width: 80%;
    margin: 0 auto;
`
const Part1 = styled.p`
    font-size:45px;
    margin: 15px;
`
const Part2 = styled.div`
margin: 20px;
display: flex;
justify-content: space-around;
`