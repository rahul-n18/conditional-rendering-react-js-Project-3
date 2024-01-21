import React, { useState } from "react";

function ConditionalIfElse() {
  const [isLoggenIn, setLoggedIn] = useState(false);
  const name = "Rahul";

  if (isLoggenIn) {
    return <p> Welcome, {name}!!</p>;
  } else {
    return <button onClick={() => setLoggedIn(true)}>Log In</button>;
  }
}

export default ConditionalIfElse;
