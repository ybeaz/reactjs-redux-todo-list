import { connect } from 'react-redux'
import * as actions from './store'


const mapStateToProps = state => {
  return {
    reduxState: state
  }
}

const mapDispatchToProps = () => {
  // console.info('mapDispatchToProps', { actions })
  return {
    actions,
  }
}

export const Container = Component =>connect(mapStateToProps, mapDispatchToProps)(Component)
