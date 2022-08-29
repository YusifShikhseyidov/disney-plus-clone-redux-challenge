import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Channels from './Channels'
import Movies from './Movies'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movies/movieSlice'

function Home() {

  const dispatch = useDispatch()

  useEffect( () => {
    db.collection("movies").onSnapshot( (snapshot) => {
      const movies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      })

      dispatch(setMovies(movies));

    })
  }, [dispatch])

  return (
    <Container>
      <ImageSlider />
      <Channels />
      <Movies />
    </Container>
  )
}

export default Home

const Container= styled.div.attrs({
  className: 'homeContainer'
})`
  height: auto;
  padding: 0px calc(3.5vw + 5px) 50px;
  position: relative;
  overflow-x: hidden;

  &:before{
    content: '';
    position: absolute;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;


  }

`