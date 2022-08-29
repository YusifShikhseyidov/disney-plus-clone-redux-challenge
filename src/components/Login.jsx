import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <LogosTogether>
            <img src="/images/cta-logo-one.svg" alt=""/>
        </LogosTogether>
        <GetAllThereButton>
            GET ALL THERE
        </GetAllThereButton>
        <SubscriptionExtrasInfo>
            <span>Get premioer access to Raya and the last dragon for an additional fee with a Disney+ subscription.</span> 
            <span>As of 03.06.21, the price of Disney+ and the Disney Bundle will increase by 1$.</span>
        </SubscriptionExtrasInfo>
        <AllLogosTogether>
            <img src="/images/cta-logo-two.png" alt="" />
        </AllLogosTogether>
    </Container>
  )
}

export default Login

const Container = styled.div.attrs({
    className: 'loginPageContainer'
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: calc(100vh - 70px);

    &:before{
        content: '';
        position: absolute;
        background-position: top;
        background-size: cover;
        background-image: url("/images/login-background.jpg");
        opacity: 0.7;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
`

const LogosTogether = styled.div`

    width: 50%;
    max-width: 50%;
    margin: 0 auto 10px;

    img{
        width: 100%;
        height: 100%;
    }
`

const GetAllThereButton = styled.button`
    width: 53%;
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: blue;
    cursor: pointer;
    border: 0px;
    outline: 0px;
    border-radius: 4px;
    transition-duration: 250ms;
    
    &:hover{
        box-shadow: rgba(120, 7, 197, 0.8) 0px 20px 30px -10px;
    }
`

const SubscriptionExtrasInfo= styled.div`
    margin-top: 15px;
    font-size: 12px;
    max-width: 50%;
    word-spacing: 2px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #fff;
`

const AllLogosTogether = styled.div`

    width: 50%;
    max-width: 50%;
    margin-top: 30px;

    img{
        width: 100%;
        height: 100%;
    }
`