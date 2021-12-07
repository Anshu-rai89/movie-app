import React from "react";
import { useParams, useHistory } from "react-router-dom";
function Signup(props) {
  const history = useHistory();
  console.log("history is", history);
  return (
    <div>
      <h1>Welcome to Signup Page Mr {history.location?.state?.user?.name}</h1>
    </div>
  );
}

export default Signup;
