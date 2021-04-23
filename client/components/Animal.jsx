import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAnimals } from '../actions'



function Animal(props) {
    useEffect(() => {
      props.dispatch(fetchAnimals())
    }, [])
  
  
    return (
      <>
          {props.animals.filter(animal => animal.animal === props.animalName).map(animal => (<Link to={`/${animal.animal}`}><p>{animal.emoji}</p></Link>
          ))}
      </>
    )
  }
  
  const mapStateToProps = (globalState) => {
    return {
      animals: globalState.animals
    }
  }
  
  export default connect(mapStateToProps)(Animal)
  