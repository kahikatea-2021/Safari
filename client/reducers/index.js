import { combineReducers } from 'redux'

import continents from './continents'
import animals from './animals'

export default combineReducers({
  continents,
  animals
})
