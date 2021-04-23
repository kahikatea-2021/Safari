import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function SouthAmerica (props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])


  return (
    <>
    <div className ='SouthAmerica'>

        <Animal animalName = 'Sloth'/>
        <Animal animalName = 'Llama'/>
        <Animal animalName = 'Parrot'/>
        <Animal animalName = 'Frog'/>

      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(SouthAmerica)
