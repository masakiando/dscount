import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';//index.js
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configuerStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
//開発用:ディスパッチ内またはディスパッチ間で状態を変更しようとすると、
// エラーが発生するReduxミドルウェア。開発用にのみ！
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
