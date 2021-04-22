import { SET_CONTINENTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTINENTS:
      return action.continents
    default:
      return state
  }
}

export default reducer
