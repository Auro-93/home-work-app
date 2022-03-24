import { useSelector } from "react-redux";

/*CUSTOM HOOK TO CHECK IF A JOB OFFER IS IN YOUR FAVOURITES*/

const useCheckFavourites = (id) => {
  const favJobs = useSelector((state) => state.favouriteJobs.favouriteJobs);
  const isInFavourites = favJobs.find((fav) => fav.id === id);
  return { isInFavourites };
};

export default useCheckFavourites;
