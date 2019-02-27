import * as actionTypes from './actionTypes';
//immutable不可改变对象, get(),set()
import { fromJS } from 'immutable';

const defaultSatate = fromJS({
  focused: false
});

export default (state = defaultSatate, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    // immutable中set方法，会结合之前该对象值，和设置的值，并返回一个新的对象
    return state.set('focused', true);
  }
  if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused', false);
  }
  return state;
}
