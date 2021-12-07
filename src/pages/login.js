import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
function Login(props) {
  const { name } = useParams();
  console.log("props in login", props);

  if (localStorage.getItem("login") === "true") {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Welcome to Login Page MR {name}</h1>
      <button onClick={() => props.history.goBack()}>Go Back</button>
      <button
        onClick={() =>
          props.history.push({
            pathname: "/signup",
            state: {
              user: {
                name: "Anshu",
                age: "24",
              },
            },
          })
        }
      >
        Go to Signup
      </button>

      <div>
        <button
          onClick={() => {
            localStorage.setItem("login", true);
            props.history.push("/login/anshu");
          }}
        >
          Log me in
        </button>
      </div>
    </div>
  );
}

export default Login;
