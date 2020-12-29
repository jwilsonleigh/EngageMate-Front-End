import React from "react";
import { Link } from "react-router-dom";
import FeatureIcon from "../featureIcons";

const FeaturedMenu = () => {
  return (
    <div>
      <Link to="/thumb">
        <FeatureIcon alt="thumbometer" src="/thumb.png" />
      </Link>
      <Link to="/raiseHand">
        <FeatureIcon alt="raisehand" src="/raisehand.jpeg" />
      </Link>
      <Link to="/livequiz">
        <FeatureIcon alt="livequiz" src="/quizzical.jpeg" />
      </Link>
    </div>
  );
};

export default FeaturedMenu;
