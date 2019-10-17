import { createStore, bindActionCreators } from 'redux'
// import redux, { bindActionCreators } from 'react-redux'

const Actions = {
  'ADD': action => ({ type: 'ADD', val: action.val }),
}

const rootReducer = (state=[], action) => {
  // console.info('store rootReducer ', { action })
  switch (action.type) {
    case 'ADD': {
      const { val } = action
      return [...state, val]
    }
    default: {
      return state
    }
  }
}


const storeConfigure = () => {
  return createStore(rootReducer)
}

export const store = storeConfigure()

const { dispatch } = store

export const action = bindActionCreators(Actions, dispatch)
