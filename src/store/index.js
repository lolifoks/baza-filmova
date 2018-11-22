import { List, Map } from 'immutable'

const initialState = Map({
  filmovi: List(),
  filtered: List(),
  isLoaded: false,
  password: ""
})

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILMOVI':
      return state.set('filmovi', action.filmovi)
    case 'SET_FILTERED':
      return state.set('filtered', action.filtered)
    case 'FETCH_START':
      return state.set('isLoaded', false)
    case 'FETCH_SUCCESS':
      return state.set('isLoaded', true)
    case 'FETCH_FAILED':
      return state.set('isLoaded', false)
    case 'SET_PASSWORD':
      return state.set('password', action.password)
    case 'SORT_BY_YEAR_ASC': {
      const filtered = state.get('filtered').sort(
        (a, b) => a.godina - b.godina
      )
      return state.set('filtered', filtered)
    }
    case 'SORT_BY_YEAR_DESC': {
      const filtered = state.get('filtered').sort(
        (a, b) => b.godina - a.godina
      )
      return state.set('filtered', filtered)
    }
    case 'SORT_ALPHA': {
      const filtered = state.get('filtered').sort((a, b) => {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      })
      return state.set('filtered', filtered)
    }
    case 'SORT_ALPHA_Z': {
      const filtered = state.get('filtered').sort((a, b) => {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (y < x) return -1;
        if (y > x) return 1;
        return 0;
      })
      return state.set('filtered', filtered)
    }
    case 'SEARCH_MOVIE': {
      const filtered = state.get('filmovi').filter(film => 
        film.naziv.toLowerCase().includes(action.fraza.toLowerCase())
      )
      return state.set('filtered', filtered)
    }
    default:
      return state
  }
}
