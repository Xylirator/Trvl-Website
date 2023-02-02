import React, {useState} from "react";
import "../../App.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [details, setDetails] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setDetails(true);
      const details = {
        name,
        email,
        password,
      };

      console.log(details);
    } else {
      setDetails(false);
    }
  };

  return (
    <div className="sign-up-card">
      <form className="sign-up-form" onSubmit={submitHandler}>
        <h2>Sign Up form</h2>
        <div className="each-input">
          <label>Name <span className="red">*</span></label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="each-input">
          <label>Email <span className="red">*</span></label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="each-input">
          <label>Password <span className="red">*</span></label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
          />
        </div>
        {!details && (
          <h3 style={{ color: "red", fontSize: "12px" }}>
           Please fill out all required fields
          </h3>
        )}

        <div className="submit-button">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
