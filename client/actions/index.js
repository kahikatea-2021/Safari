import { getContinents } from '../apis/continents'

export const SET_CONTINENTS = 'SET_CONTINENTS'

export function setContinents (continents) {
  return {
    type: SET_CONTINENTS,
    continents
  }
}

export function fetchContinents () {
  return dispatch => {
    return getContinents()
      .then(continents => {
        dispatch(setContinents(continents))
        return null
      })
  }
}
