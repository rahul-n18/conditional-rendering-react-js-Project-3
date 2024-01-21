import React, { useState } from "react";

function ConditionalAndOperator() {
  const [isLoggenIn, setLoggedIn] = useState(false);
  const name = "Rahul";

  return (
    <div>
      {isLoggenIn && <p>Welcome, {name}!!</p>}
      {!isLoggenIn && <button onClick={() => setLoggedIn(true)}>Log In</button>}
    </div>
  );
}

export default ConditionalAndOperator;
