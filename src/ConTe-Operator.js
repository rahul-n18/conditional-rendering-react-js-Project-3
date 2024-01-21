import React, { useState } from "react";

function ConditionalTernary() {
  const [isLoggenIn, setLoggedIn] = useState(false);
  const name = "Rahul";
  return isLoggenIn ? (
    <p>Welcome, {name}</p>
  ) : (
    <button onClick={() => setLoggedIn(true)}>Log In</button>
  );
}

export default ConditionalTernary;
