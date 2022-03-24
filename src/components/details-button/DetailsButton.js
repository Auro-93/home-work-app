import React from "react";
import DetailsButtonUI from "./DetailsButtonUI";

const DetailsButton = ({ jobId, isLarge, style }) => {
  return <DetailsButtonUI jobId={jobId} isLarge={isLarge} style={style} />;
};

export default DetailsButton;
