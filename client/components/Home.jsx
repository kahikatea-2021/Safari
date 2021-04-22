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
      <div>
        <h1>Virtual Safari</h1>
        <ul>
          {props.continents.map(continent => (
            <li key={continent}><Link to={`/${continent}`}>{continent}</Link></li>
          ))}
        </ul>
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
