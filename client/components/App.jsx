import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Africa from './Africa'
import Antarctica from './Antarctica'
import Asia from './Asia'
import Europe from './Europe'
import NorthAmerica from './NorthAmerica'
import SouthAmerica from './SouthAmerica'
import Oceania from './Oceania'
import AnimalInfo from './AnimalInfo'

function App (props) {
  return (
    <>
      <Route exact path ='/' component = {Home}/>
      <Route path='/Africa' component = {Africa} />
      <Route path='/Antarctica' component = {Antarctica} />
      <Route path='/Asia' component = {Asia} />
      <Route path='/Europe' component = {Europe} />
      <Route path='/NorthAmerica' component = {NorthAmerica} />
      <Route path='/SouthAmerica' component = {SouthAmerica} />
      <Route path='/Oceania' component = {Oceania} />
      <Route path='/AnimalInfo/:name' component = {AnimalInfo} />
    </>
  )
}
export default App
