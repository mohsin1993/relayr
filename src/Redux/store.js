import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function configureStore() {
  const store = createStore(reducer, {}, applyMiddleware(thunk));
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}
