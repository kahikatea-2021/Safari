import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchContinents, fetchAnimals } from '../actions'

function Home(props) {
  useEffect(() => {
    props.dispatch(fetchContinents())
    props.dispatch(fetchAnimals())
  }, [])

  return (
    <>
      <div className="background">
        <h1>Virtual Safari</h1>
        <div className="grid-container">Safari</div>
        <div ><img className="car" src="./safari.png" /></div>
        <div className="grid-item">
          <ul>{props.continents.map(continent => (
            <button class="grid-item" key={continent}><Link to={`/${continent}`}>{continent}</Link></button>
          ))}
            {props.animals.map(animal => (
              <li key={animal}><p>{animal.emoji}</p></li>
            ))}

          </ul>

        </div>
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
