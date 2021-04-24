import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchAnimals } from '../actions'

function Animal (props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])

  return (
    <>
      {props.animals.filter(animal => animal.animal === useParams().name).map(animal =>
        <div><h1>{animal.animal}</h1>
          <p>Emoji: {animal.emoji}</p>

          <p>Rebecca's Description: {animal.description}</p>
          <p>Continent: {animal.continent}</p>
          <img src={`/images/${animal.image}`}/>
          <p>Cuteness Rating: {animal.cuteness_rating}</p>
          <p>Danger Rating: {animal.danger_rating}</p>
          <p>{animal.can_jump_over_car}</p>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Animal)
