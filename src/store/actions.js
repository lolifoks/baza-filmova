import { List } from "immutable";
import { getUrl } from "../config/api";

/* ACTION CREATORS */

export const setFilmovi = filmovi => ({
  type: 'SET_FILMOVI',
  filmovi
})

export const setFiltered = filtered => ({
  type: 'SET_FILTERED',
  filtered
})

export const setPassword = password => ({
  type: 'SET_PASSWORD',
  password
})

export const fetchSuccess = () => ({
  type: 'FETCH_SUCCESS',
})

export const fetchStart = () => ({
  type: 'FETCH_START',
})

export const fetchFailed = () => ({
  type: 'FETCH_FAILED',
})

export const sortByYearAsc = () => ({
  type: 'SORT_BY_YEAR_ASC'
})

export const sortByYearDesc = () => ({
  type: 'SORT_BY_YEAR_DESC'
})

export const sortAlpha = () => ({
  type: 'SORT_ALPHA'
})

export const sortAlphaZ = () => ({
  type: 'SORT_ALPHA_Z'
})

export const searchMovie = fraza => ({
  type: 'SEARCH_MOVIE',
  fraza
})

/* ASYNC ACIONTS */

export const fetchMovies = () => dispatch => {
  dispatch(fetchStart())
  return fetch(getUrl)
    .then(response => response.json())
    .then(filmovi => {
      dispatch(fetchSuccess())
      dispatch(setFilmovi(List(filmovi)))
      dispatch(setFiltered(List(filmovi)))
    })
    .catch(e => dispatch(fetchFailed()))
}