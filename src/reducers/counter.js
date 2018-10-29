import Immutable from 'immutable';
const initialState = Immutable.Map({ val :0, isPinging:0});
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.set('val', state.get('val') + 1);
    case 'DECREMENT':
        return state.set('val', state.get('val') - 1);
    case 'PING':
        return state.set('isPinging', 1 );
    case 'PONG':
        return state.set('isPinging', 2 );
    default:
      return state
  }
}

export default counterReducer
