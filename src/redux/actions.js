export const UPDATE_FAVOURITE = "UPDATE_FAVOURITE";

export const updateFavourite = (id) => ({
  type: UPDATE_FAVOURITE,
  payload: id,
});
