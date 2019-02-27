import { createStore, compose } from 'redux';
import reducer from './reducer';

// 开启浏览器redux测试
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(reducer, composeEnhancers());

export default store;