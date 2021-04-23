import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function NorthAmerica (props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])


  return (
    <>
    <div className ='NorthAmerica'>

        <Animal animalName = 'Otter'/>
        <Animal animalName = 'Alligator'/>
        <Animal animalName = 'Squirrel'/>
        <Animal animalName = 'Raccoon'/>
        <Animal animalName = 'Buffalo'/>
        <Animal animalName = 'Eagle'/>
        <Animal animalName = 'Beaver'/>

      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(NorthAmerica)
