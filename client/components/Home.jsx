
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchContinents } from '../actions'
function Home (props) {
  useEffect(() => {
    props.dispatch(fetchContinents())
  }, [])
  return (
    <>
      <div className="background">
      
        
        <div className="grid-item"> <h1>Virtual Safari</h1>  {props.continents.map(continent => (
            <div className="buttonMain" key={continent}><Link to={`/${continent}`}>{continent}</Link></div>
          ))}
        </div>
        <p>Unvortunetely during COVID times  dsgfdfgdsf our travel optons are very limited.
          We found solution to it! Please travel with us on our Virtual Safari.
          You will get to see lots of interesting places and animals.
          Enjoy your journey! </p>
        <div><img className="car"src="./safari2.png"/></div>
        
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    continents: globalState.continents
  }
}
export default connect(mapStateToProps)(Home)