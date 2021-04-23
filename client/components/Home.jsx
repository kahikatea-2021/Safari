
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
        <h1>Virtual Safari</h1>
        <div className="grid-container">Safari</div>
        <div className="grid-item">  {props.continents.map(continent => (
            <button className="buttonMain" key={continent}><Link to={`/${continent}`}>{continent}</Link></button>
          ))}
        </div>
        <p>Unvortunetely during COVID times our travel optons are very limited.
          We found solution to it! Please travel with us on our Virtual Safari.
          You will get to see lots of interesting places and animals.
          Enjoy your journey! </p>
        <div><img className="car"src="./safari2.png"/></div>
<<<<<<< HEAD
        
=======
>>>>>>> 884b86ad70261186b01d496cd8d3dc75b64e1f39
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