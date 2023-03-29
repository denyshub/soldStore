import React from "react";

import Header from "./Header";
import PeopleImgs from "./PeopleImgs";
import AboutUs from "./AboutUs";
import FollowUs from "./FollowUs";

const FullMainPage = () => {
  return (
    <div className="FullMainPage">
      <Header />
      <PeopleImgs />
      <AboutUs />
      <FollowUs />
    </div>
  );
};

export default FullMainPage;
