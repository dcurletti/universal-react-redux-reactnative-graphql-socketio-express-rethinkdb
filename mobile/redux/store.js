import {AsyncStorage} from 'react-native';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import {persistStore, autoRehydrate} from 'redux-persist'
// import immutableTransform from 'redux-persist-transform-immutable';
// import reducers from '../../src/redux/modules/reducer';
import clientMiddleware from '../../src/redux/middleware/clientMiddleware';
// import ApiClient from '../../src/helpers/ApiClient';
//
//
// const createStoreWithMiddleware = compose (
//   applyMiddleware(
//     thunk,
//     clientMiddleware(new ApiClient())),
//   autoRehydrate()
// )(createStore);
//
// const totalReducers = combineReducers(reducers);
//
// let store = (createStoreWithMiddleware)(totalReducers);
//
// const persistorOps = {
//   storage: AsyncStorage,
//   whitelist: ['agent'],
//   transforms: [immutableTransform()]
// };
// export const persistor = persistStore(store, persistorOps);

export default {};
