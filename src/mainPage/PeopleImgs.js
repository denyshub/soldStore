import React from "react";
import kid from "../images/People/kid.png";
import women from "../images/People/women.png";
import men from "../images/People/men.png";

const PeopleImgs = () => {
  return (
    <div className="mainContainer">
      <div className="container flexBox2">
        <div className="item flexBox2">
          <div>
            <a href="men.html">
              <img className="photo_size" src={men} alt="men"></img>
            </a>
            <p className="captionCenterTextImage">For men</p>
          </div>
          <div>
            <a href="women.html">
              <img className="photo_size " src={women} alt="women"></img>
            </a>
            <p className="captionCenterTextImage">For women</p>
          </div>
          <div>
            <a href="children.html">
              <img className="photo_size " src={kid} alt="kid"></img>
            </a>
            <p className="captionCenterTextImage">For children</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleImgs;
