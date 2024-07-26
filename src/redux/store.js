import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers";

const rootReducer = combineReducers({
  data: reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
