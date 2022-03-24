import React from "react";
import { useDispatch } from "react-redux";
import RemoveButtonUI from "./RemoveButtonUI";
import { removeFavourite } from "../../reducers/favouriteJobsSlice";
import { removeFavNotify } from "../../utilities/notifications";

const RemoveButton = ({ job, isLarge, style }) => {
  const dispatch = useDispatch();

  /*REMOVE JOB OFFER FROM FAVOURITES AND DISPLAY TOAST */
  const removeFav = () => {
    removeFavNotify(job.title);
    dispatch(removeFavourite(job.id));
  };

  return (
    <RemoveButtonUI removeFav={removeFav} isLarge={isLarge} style={style} />
  );
};

export default RemoveButton;
