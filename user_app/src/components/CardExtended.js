import React from "react";
import ProfileImage from "./ProfileImage";
import InfoText from "./InfoText";
import City from "./City";

function CardExtended (props) {
  const { card } = props;
  return (
      <div className="card-container">
        <ProfileImage />
        <InfoText className="user-name text-bold">{card.name}</InfoText>
        <InfoText className="user-age">{card.age} years</InfoText>
        <City card={card} />
      </div>
    );
}

export default CardExtended;
