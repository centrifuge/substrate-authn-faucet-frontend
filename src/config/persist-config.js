import storage from 'redux-persist/lib/storage';

//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation']
};
  
export const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['isLoggingIn']
};

export const persistConfig = {
  key: 'root',
  storage: storage,
  //stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
 