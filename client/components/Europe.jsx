import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function Europe (props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])


  return (
    <>
    <div className ='Europe'>



        <Animal animalName = 'Cow'/>
        <Animal animalName = 'Horse'/>
        <Animal animalName = 'Duck'/>
        <Animal animalName = 'Dodo'/>
        <Animal animalName = 'Pig'/>

      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Europe)
