import React from "react";
import "../../assets/styles/Avatar/_Avatar.scss";

function Avatar() {
  return (
    <div className="Avatar-Container">
      <div className="Avatar-RoundedProfile">
        <img
          src="https://i.pinimg.com/564x/91/0a/35/910a35c56591de3f78b249079be12794.jpg"
          alt=""
        />
      </div>

      <div className="Avatar-Profile">
        <h2>Luis Jimenez</h2>
        <ul className="Avatar-ProfileList">
          <li className="Avatar-ProfileListItem">@thrumyeyes.film</li>
        </ul>
      </div>
    </div>
  );
}

export default Avatar;
