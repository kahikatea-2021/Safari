import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchContinents, fetchAnimals } from '../actions'

function Home (props) {
  useEffect(() => {
    props.dispatch(fetchContinents())
    props.dispatch(fetchAnimals())
  }, [])

  return (
    <>
      <div>
        <h1>Virtual Safari</h1>
        <img src={('images/Safari.png')}></img>
        <ul>
          {props.continents.map(continent => (
            <li key={continent}><Link to={`/${continent}`}>{continent}</Link></li>
          ))}
          {props.animals.map(animal => (
            <li key={animal}><p>{animal.emoji}</p></li>
          ))}

        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    continents: globalState.continents,
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Home)
