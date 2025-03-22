import { itemType } from "../api/api";
import { ActionsTypes } from "./redux-store";
let initialState = {
  posts: [],
};
export type InitialStateType = {
  posts: Array<Array<itemType>>;
};
const appReducer = (
  state = initialState,
  action: ActionTypeDialogs,
): InitialStateType => {
  switch (action.type) {
    case "ADD_POSTS": {
      return {
        ...state,
        posts: [...state.posts, [...action.body]],
      };
    }
    default:
      return state;
  }
};
type ActionTypeDialogs = ActionsTypes<typeof ActionsDialogs>;
export const ActionsDialogs = {
  addPosts: (body: Array<itemType>) => ({ type: "ADD_POSTS", body }) as const,
};
export default appReducer;
