import React from "react";
import { useParams } from "react-router-dom";
function Profile(props) {
  return (
    <div>
      <h1>Welcome to Profile of Mr {props.data.name}</h1>
    </div>
  );
}

export default Profile;
