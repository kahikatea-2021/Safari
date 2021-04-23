import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions'
import Animal from './Animal'

function Antarctica(props) {
  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])


  return (
    <>
      <div className ='Antarctica'>
        <Animal animalName='Penguin' />
        <Animal animalName='Polar Bear' />
        <Animal animalName='Seal' />

      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Antarctica)
