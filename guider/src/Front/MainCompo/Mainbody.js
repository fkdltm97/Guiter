import React from 'react'
import styled from 'styled-components'
import Third from '../../Component/MainPage/Mainbody/Thrid'
import MainInput from './MainEl/MainInput'
import MainSelection from './MainEl/MainSelection'
import Mainbutton from './MainEl/Mainbutton'

function Mainbody() {
    return (
        <div>
            <Body>
                <BodyHeader>

                    <First>
                        <Img src='../../images/vitejs.svg' alt=""/>
                        <Logolable>GUIDER</Logolable>
                    </First>

                    <Second>
                        <UlList>
                            <Ulitem><ALine href="#">여행</ALine></Ulitem>
                            <Ulitem><ALine href="#">숙박</ALine></Ulitem>
                            <Ulitem><ALine href="#">가이드</ALine></Ulitem>
                            <Ulitem><ALine href="#">랜트</ALine></Ulitem>
                        </UlList>
                    </Second>

                    <Third/>
                       

                </BodyHeader>

                <BodyBody>
                    <MainSelection/>
                    <MainInput/>
                    <Mainbutton/>
                </BodyBody>

            </Body>
           
        </div>
    )
}

export default Mainbody



const BodyHeader = styled.div`
    width: 80%;
    height: 100px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BodyBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    background-color: white;
    
`
const First = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    `

const Second = styled.div`
    /* display: flex;
    justify-content: center;    
    align-items: center; */
    /* margin: 0 auto; */
    `

const Body = styled.div`
    width: 100%;
    /* padding-bottom:60px; */
    /* min-height:calc(100vh - 289px); */
    height: 77vh;
    background:url("https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560");
    background-position :bottom ;
    background-size: cover;
    background-repeat: no-repeat;
`
const Logolable = styled.p`
    font-size: 20px;
    color: white;
`


const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`
const Search = styled.input`
    width: 300px;
    height: 30px;
`

const ALine = styled.a`
    text-decoration: none;
    color : white;
    display:inline-block;
    margin:5px;
    text-transform:uppercase;

    ::after{
        display:block;
        content: '';
        border-bottom: solid 3px white;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    :hover:after { transform: scaleX(1); }
`

const UlList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `
const Ulitem = styled.li`
    list-style-type: none;
    font-size: 25px;
`
