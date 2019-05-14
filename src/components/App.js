import React from 'react'
import { connect } from 'react-redux'
import '@babel/polyfill'

import Header from './Header'
import ItemsList from './ItemsList'
import { getFavourites } from '../store/actions'
import { GET_FAVOURITES } from '../store/actions/types'

export class App extends React.Component {
  componentDidMount () {
    this.props.getFavourites()
  }

  render () {
    return (
      <div className='ui container'>
        <Header />
        <ItemsList />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    getFavourites: () => {
      dispatch({
        type: GET_FAVOURITES,
        payload: getFavourites
      })
    }
  }
}

export default connect(
  null,
  mapDispatch
)(App)
