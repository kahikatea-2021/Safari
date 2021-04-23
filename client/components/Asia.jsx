import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function Asia (props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])

  return (
    <>
    <div className ='Asia'>
       <Animal animalName='Panda' />
        <Animal animalName='Leopard' />
        <Animal animalName='Asian Elephant' />
        <Animal animalName='Red Panda' />
        <Animal animalName='Camel' />
      </div>
    </>
  )
}


const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Asia)
