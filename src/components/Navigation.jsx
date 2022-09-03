import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserName, selectUserPhoto, setUserLogin, setUserLogout } from '../features/user/userSlice'
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Navigation() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Grabbing userName and userPhoto from userSlice
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged( async (user) =>{
      if(user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));
        navigate('/');
      }
    })
  })

  // Firebase signin with google popup
  const signIn = () => {
    auth.signInWithPopup(provider).then(result=>{
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));
      navigate('/');
    })
  }

  const signOut = () =>{
    auth.signOut().then(() => {
      dispatch(setUserLogout());
      navigate('/login');
    })
  }

  return (
    <Nav>
      <Logo src='/images/logo.svg' alt='website-logo'/>
      { !userName ? (
        <LoginContainer>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <NavLink to='#'>
              <img src="/images/home-icon.svg" alt='nav-home'/>
              <span>HOME</span>
            </NavLink>
            <NavLink to='#'>
              <img src="/images/search-icon.svg" alt='nav-search'/>
              <span>SEARCH</span>
            </NavLink>
            <NavLink to='#'>
              <img src="/images/watchlist-icon.svg" alt='nav-watchlist'/>
              <span>WATCHLIST</span>
            </NavLink>
            <NavLink to='#'>
              <img src="/images/movie-icon.svg" alt='nav-movie'/>
              <span>MOVIES</span>
            </NavLink>
            <NavLink to='#'>
              <img src="/images/original-icon.svg" alt='nav-original'/>
              <span>ORIGINALS</span>
            </NavLink>
            <NavLink to='#'>
              <img src="/images/series-icon.svg" alt='nav-series'/>
              <span>SERIES</span>
            </NavLink>
          </NavMenu>
    
          <UserIcon onClick={signOut} src="/images/girly-in-mood.png" alt='you' />
        </>
      )}

    </Nav>
  )
}

export default Navigation

const Nav= styled.div.attrs({
  className: 'navbarContainer'
})`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;


  @media (min-width: 2560px){
    height: 150px;
  }
`

const Logo = styled.img`
  width: 90px;

  @media (min-width: 2560px){
    width: 140px;
    margin-left: 40px;
  }
`

const NavMenu = styled.div.attrs({
  className: 'navMenuLinks'
})`
  display: flex;
  flex: 1;
  justify-content: center;

  a{
    display: flex;
    align-items: center;
    padding: 0 2rem;
      text-decoration: none;
      color: #fff;

    img{
      height: 20px;
    }

    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after{
        content: '';
        position: absolute;
        right: 0;
        bottom: -4px;
        left: 0;
        height: 2px;
        background-color: #fff;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover{
      span:after{
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`

const UserIcon = styled.img`
  height: 55px;
  width: 4.5%;
  border-radius: 50%;
  cursor: pointer;
`

const Login = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  letter-spacing: 1.5px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover{
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 2560px){
    padding: 24px 54px;
    font-size: 25px;
  }
`

const LoginContainer= styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`