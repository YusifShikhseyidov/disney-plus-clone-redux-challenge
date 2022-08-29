import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import db from '../firebase'

function MovieDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [movie, setMovie] = useState();

    useEffect(() => {
        // Grab the movie info from Database
        db.collection('movies')
        .doc(id)
        .get()
        .then((doc)=> {
            // Save the movie data
            if(doc.exists) setMovie(doc.data());
            // Else redirect to Home page
            navigate('/')
        })
    }, [])

  return (
    <Container>
        { movie && (
            <>
                <BackgroundImage>
                    <img src={movie.backgroundImg} alt="details-page-background" />
                </BackgroundImage>
                <MovieTitleImage>
                    <img src={movie.titleImg} alt="movie-title" />
                </MovieTitleImage>
                <ControlButtonsWrapper>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="play-icon" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="play-trailer-icon" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="group-watch-icon" />
                    </GroupWatchButton>
                </ControlButtonsWrapper>

                <Subtitle>
                    {movie.subTitle}
                </Subtitle>

                <Description>
                    {movie.description}
                </Description>
            </>
        )}
    </Container>
  )
}

export default MovieDetails

const Container= styled.div.attrs({
    className: 'movieDetails'
})`
    height: calc(100vh - 70px);
    min-height: calc(100vh - 70px);
    padding: 0px calc(3.5vw + 5px);
    position: relative;
`

const BackgroundImage= styled.div`

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const MovieTitleImage= styled.div.attrs({
    className: 'titleImageWrapper'
})`

    width: 35vw;
    height: 30vh;
    min-width: 200px;
    min-height: 170px;
    margin-top: 55px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const ControlButtonsWrapper= styled.div.attrs({
    className: 'control-buttons'
})`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 5px;
    margin-top: 3rem;
`

const PlayButton= styled.button`
    display: flex;
    align-items: center;
    padding: 8px 24px;
    border-radius: 2px;
    border: 0px;
    outline: 0px;
    margin-left: 1rem;
    background-color: rgb(248, 248, 248);
    font-size: 15px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background-color: rgb(198, 198, 198);
    }
`

const TrailerButton= styled(PlayButton)`

    cursor: pointer;
    padding: 7px 24px;
    border: 1px solid #fff;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.35);

    &:hover{
        color: #000;
        background-color: rgb(220, 210, 210);
    }
`

const AddButton= styled.button`
    // padding: 7px 15px;
    width: 44px;
    height: 44px;
    margin-left: 1rem;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    cursor: pointer;
    span{
        font-size: 30px;
    }
`

const GroupWatchButton = styled.button`
    // padding: 4px 7px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
`

const Subtitle = styled.div`
    margin: 10px 0 0 15px;
    font-size: 13px;
    word-spacing: 4px;
    color: #fff;
`

const Description = styled.div`
    width: 50%;
    max-width: 550px;
    height: 85px;
    max-height: 225px;
    background-color: rgba(0, 0, 0, 0.29);
    margin: 10px 0 0 15px;
    padding: 10px 0 0 11px;
    color: #fff;
    border-radius: 2px;
`