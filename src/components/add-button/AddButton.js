import React from "react";
import { useDispatch } from "react-redux";
import AddButtonUI from "./AddButtonUI";
import { addFavourite } from "../../reducers/favouriteJobsSlice";
import { addFavNotify } from "../../utilities/notifications";

const AddButton = ({ favouriteJob, isLarge, style }) => {
  const dispatch = useDispatch();

  /*ADD JOB OFFER TO FAVOURITES AND DISPLAY TOAST*/
  const addToFav = () => {
    dispatch(addFavourite(favouriteJob));
    addFavNotify(favouriteJob.title);
  };

  return <AddButtonUI isLarge={isLarge} addToFav={addToFav} style={style} />;
};

export default AddButton;
