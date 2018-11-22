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

export const setLoggedIn = loggedIn => ({
  type: 'SET_LOGGED_IN',
  loggedIn
})

export const fetchSuccess = () => ({
  type: 'FETCH_SUCCESS',
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
