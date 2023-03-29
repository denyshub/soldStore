import React from "react";

const FollowUs = () => {
  return (
    <div className="info">
      <div>
        <h2 className = 'followText'>Follow us:</h2>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/">
          <ion-icon id = "socials" name="logo-instagram"></ion-icon>
        </a>
        <a href="https://uk-ua.facebook.com/">
        <ion-icon id = "socials" name="logo-facebook"></ion-icon>
        </a>
        <a href="https://twitter.com/?lang=uk">
        <ion-icon id = "socials" name="logo-twitter"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default FollowUs;