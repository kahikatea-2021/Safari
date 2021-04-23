import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { fetchAnimals } from '../actions'



function Animal(props) {
    useEffect(() => {
      props.dispatch(fetchAnimals())
    }, [])
  
  
    return (
      <>
          {props.animals.filter(animal => animal.animal === props.animalName).map(animal => (<li key={animal}><p>{animal.emoji}</p></li>
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
  