import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function Oceania (props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])


  return (
    <>
    <div className ='Oceania'>

        <Animal animalName = 'Kiwi'/>
        <Animal animalName = 'Kangaroo'/>
        <Animal animalName = 'Koala'/>
        <Animal animalName = 'Spider'/>
        <Animal animalName = 'Sheep'/>
        <Animal animalName = 'Snake'/>
        <Animal animalName = 'Tuatara'/>
        <Animal animalName = 'Quokka'/>
        <Animal animalName = 'Crocodile'/>

      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Oceania)
