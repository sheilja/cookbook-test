import { UPDATE_FAVOURITE } from "./actions";

const initialState = {
  favourites: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAVOURITE:
      const id = action.payload;
      if (state.favourites.indexOf(id) > -1) {
        return {
          ...state,
          favourites: state.favourites.filter((id) => id !== action.payload),
        };
      } else {
        console.log("else");
        return { ...state, favourites: [...state.favourites, action.payload] };
      }
    default:
      return state;
  }
};

export default counterReducer;
