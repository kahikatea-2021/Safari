import React from 'react'
import { connect } from 'react-redux'

import { fetchContinents } from '../actions'

function Africa (props) {
  return (
    <>
      <div>
        test
      </div>
    </>
  )
}


const mapStateToProps = (globalState) => {
  return {
    continents: globalState.continents
  }
}

export default connect(mapStateToProps)(Africa)