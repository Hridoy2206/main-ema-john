import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth)

  const handleNameBlur = event =>{
      setName(event.target.value);
  }
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    const shipping = {name, email, address, phone}
    console.log(shipping);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateSubmit}>
          <div className="form-section">
            <label className="form-label" htmlFor="name">
              Your Name
            </label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name=""
              id=""
              required
            />
          </div>
          <div className="form-section">
            <label className="form-label" htmlFor="email">
              Your Email
            </label>
            <input
              value={user?.email}
              type="email"
              name=""
              id=""
              required
              readOnly
            />
          </div>
          <div className="form-section">
            <label className="form-label" htmlFor="address">
              Your address
            </label>
            <input
              onBlur={handleAddressBlur}
              type="address"
              name=""
              id=""
              required
            />
          </div>
          <div className="form-section">
            <label className="form-label" htmlFor="password">
              Phone Number
            </label>
            <input
              onBlur={handlePhoneBlur}
              type="phone"
              name=""
              id=""
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
