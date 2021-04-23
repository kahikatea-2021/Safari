import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function Africa(props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])


  return (
    <>
      <div>

        <Animal animalName = 'Lion'/>
        <Animal animalName = 'African Elephant'/>
        <Animal animalName = 'Giraffe'/>
        <Animal animalName = 'Zebra'/>
        <Animal animalName = 'Orangutan'/>
        <Animal animalName = 'Tiger'/>

        {/* {props.animals.filter(animal => animal.continent === 'Africa').map(animal => (<li key={animal}><p>{animal.emoji}</p></li>
        ))} */}

      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Africa)
