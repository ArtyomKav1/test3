import { combineReducers, legacy_createStore as createStore } from "redux";
import appReducer from "./app-reducer.ts";
let rootReducers = combineReducers({
  app: appReducer,
});
export type ActionsTypes<T> = T extends {
  [key: string]: (...arg: any[]) => infer U;
}
  ? U
  : never;
type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;
const store = createStore(rootReducers);
export default store;
