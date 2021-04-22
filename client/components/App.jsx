import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Africa from './Africa'

function App(props) {
  return (
    <>
      <Route exact path ='/' component = {Home}/>
      <Route path='/Africa' component = {Africa} />
    </>
  )
}
export default App;
