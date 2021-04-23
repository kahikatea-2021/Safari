import { getContinents } from '../apis/continents'
import { getAnimals } from '../apis/animals'

export const SET_CONTINENTS = 'SET_CONTINENTS'
export const SET_ANIMALS = 'SET_ANIMALS'

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

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals
  }
}

export function fetchAnimals () {
  return dispatch => {
    return getAnimals()
      .then(animals => {
        dispatch(setAnimals(animals))
        return null
      })
  }
}
