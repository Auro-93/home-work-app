import React from "react";

import FavJobCardUI from "./FavJobCardUI";
import useCheckFavourites from "../../hooks/useCheckFavourites";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const FavJobCard = ({ job }) => {
  const { isInFavourites } = useCheckFavourites(job.id);
  const { isTabletOrMobile } = useMediaQueryHook();

  return (
    <FavJobCardUI
      job={job}
      isInFavourites={isInFavourites}
      isTabletOrMobile={isTabletOrMobile}
    />
  );
};

export default FavJobCard;
