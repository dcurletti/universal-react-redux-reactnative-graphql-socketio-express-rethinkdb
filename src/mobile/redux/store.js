import {AsyncStorage} from 'react-native';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducers from '../../redux/modules/reducer';
import clientMiddleware from '../../redux/middleware/clientMiddleware';
import ApiClient from '../../helpers/ApiClient';
// import immutableTransform from 'redux-persist-transform-immutable';


const createStoreWithMiddleware = compose (
  applyMiddleware(
    thunk,
    clientMiddleware(new ApiClient())),
  autoRehydrate()
)(createStore);

let store = (createStoreWithMiddleware)(reducers);

const persistorOps = {
  storage: AsyncStorage,
  whitelist: ['agent'],
  // transforms: [immutableTransform()]
};
export const persistor = persistStore(store, persistorOps);

export default store;
