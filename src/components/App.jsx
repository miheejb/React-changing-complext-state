import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFNOnChange(event) {
    setFirstName(event.target.value);
 
  }
    function handleLNOnChange(event) {

      setLastName(event.target.value);
    }

  function handleOnClick(event) {
    setIsSubmitted(true);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted? firstName + " "+ lastName: null } </h1>
      <form>
        <input
          onChange={handleFNOnChange}
          value={firstName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleLNOnChange}
          value={lastName}
          name="lName"
          placeholder="Last Name"
        />
        <button
          style={{ backgroundColor: isSubmitted ? "black" : "white" }}
          onClick={handleOnClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
