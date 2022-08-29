import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    movies: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        }
    }
})

// Export Actions
export const { setMovies } = movieSlice.actions;

// Export Movies for other components to be able to access it
export const selectMovies = state => state.movie.movies;

// Export Reducer
export default movieSlice.reducer;