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
        <div ><img className="car"src="./safari.png"/></div>
        <div className="grid-item">  {props.continents.map(continent => (
            <button class="grid-item" key={continent}><Link to={`/${continent}`}>{continent}</Link></button>
          ))}
        </div>
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
