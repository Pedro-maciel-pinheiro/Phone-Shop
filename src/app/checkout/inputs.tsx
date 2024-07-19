// inputs.tsx
import React, { useState } from 'react';

export function useInputFields() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  return {
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    zip,
    setZip
  };
}

export function InputFields({
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  address,
  setAddress,
  city,
  setCity,
  state,
  setState,
  zip,
  setZip
}:any) {
  return (
    <div className="flex flex-col w-full max-w-xl gap-4 border-2 shadow-xl rounded-xl p-5">
      <div className="text-xl font-semibold">
        <h1>Contact Information</h1>
      </div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="input input-bordered w-full active:bg-gray-100 bg-white focus:bg-gray-100"
      />
      <div className="text-xl font-semibold">
        <h1>Shipping address</h1>
      </div>
      <div className="flex gap-2">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First name"
          className="input input-bordered w-full bg-white focus:bg-gray-100"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last name"
          className="input input-bordered w-full bg-white focus:bg-gray-100"
        />
      </div>
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Address"
        className="input input-bordered w-full bg-white focus:bg-gray-100"
      />
      <div className="flex gap-2">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
          className="input input-bordered w-full bg-white focus:bg-gray-100"
        />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="State"
          className="input input-bordered w-full bg-white focus:bg-gray-100"
        />
        <input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          type="text"
          placeholder="Zip"
          className="input input-bordered w-full bg-white focus:bg-gray-100"
        />
      </div>
    </div>
  );
}
