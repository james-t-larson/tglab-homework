import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Dummy = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/register");
    }, 1000);
  });

  return (
    <div className={"dummy-component"}>
      <h3>This is a dummy page</h3>
      <p>Redirecting...</p>
    </div>
  );
}

export default Dummy;
