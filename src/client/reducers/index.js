import { fromJS } from 'immutable'

const intialState = {
  example: null,
}

const reducer = (state = fromJS(intialState) , action) => {
  switch(action.type) {
     case 'client/test':
       return state.setIn(['example'],fromJS(action.data))
     default:
       return state
  }
}


export default reducer
