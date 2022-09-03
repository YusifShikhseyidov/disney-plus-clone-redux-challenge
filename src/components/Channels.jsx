import React from 'react'
import styled from 'styled-components'

function Channels() {
  return (
    <Container>
        <Wrapper>
            <img src='/images/viewers-disney.png' alt='disney-channel-logo' />
        </Wrapper>
        <Wrapper>
            <img src='/images/viewers-marvel.png' alt='disney-channel-logo' />
        </Wrapper>
        <Wrapper>
            <img src='/images/viewers-national.png' alt='disney-channel-logo' />
        </Wrapper>
        <Wrapper>
            <img src='/images/viewers-pixar.png' alt='disney-channel-logo' />
        </Wrapper>
        <Wrapper>
            <img src='/images/viewers-starwars.png' alt='disney-channel-logo' />
            {/* <video width='150' autoplay loop>
                <source src='/videos/1564674844-disney.mp4' type='video/mp4'/>
            </video> */}
        </Wrapper>
    </Container>
  )
}

export default Channels

const Container = styled.div.attrs({
    className: 'channelsContainer'
})`
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 26px;
    justify-items: center;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, minmax(0, 1fr));
    }
`

const Wrapper= styled.div.attrs({
    className: 'channelWrapper'
})`
    
    // width: 85rem;
    border: 3px solid rgba(249, 249, 249, 0.2);
    border-radius: 20px;
    cursor: pointer;
    backface-visibility: hidden;
    // position: relative;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 77%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: translateY(-5px) scale(1.05);
        border-color: rgb(249, 249, 249, 0.8);

        // video{
        //     visibility: visible;
        // }
    }

    img{
        width: 100%;
        object-fit: cover;
    }

    // video{
    //     border-radius: 20px;
    //     position: absolute;
    //     top:0;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     object-fit: contain;
    //     z-index: -1;
    //     visibility: hidden;
    // }

    @media screen and (max-width: 600px){
        width: 20rem;
    }
`