import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movies/movieSlice'

function Movies() {

    const movies = useSelector(selectMovies)

  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            {movies && movies.map(movie=> (
                <Wrapper key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                        <img src={movie.cardImg} alt="movie" />
                    </Link>
                </Wrapper>
            ))}

            <Wrapper>
                <img src="https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="movie" />
            </Wrapper>
            <Wrapper>
                <img src="https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="movie" />
            </Wrapper>
            <Wrapper>
                <img src="https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="movie" />
            </Wrapper>
            <Wrapper>
                <img src="https://images.unsplash.com/photo-1517187654069-ba29110a1d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="movie" />
            </Wrapper>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div.attrs({
    className: 'moviesContainer'
})`
    margin-top: 80px;

    h4{
        margin: 20px 0 20px 45px;

    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-items: center;
    grid-gap: 20px;
`

const Wrapper = styled.div`
    width: 250px;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid rgb(249, 249, 249, 0.2);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 77%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover{
        border: 3px solid rgb(249, 249, 249, 0.8);
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`