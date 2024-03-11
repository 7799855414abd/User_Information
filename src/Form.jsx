import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const dispatch = useDispatch();

  // State for amount input
  const [amount, setAmount] = useState("");

  // State for full name input
  const [fullName, setFullName] = useState("");

  // State for mobile input
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <>
      {/* Amount section */}
      <div className='container'>
        <h2>Form</h2>

        {/* Row for amount input */}
        <div className='row'>
          <div className='col-4'>
            {/* Input for entering the amount */}
            <input
              type="number"
              className="form-control"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>

          {/* Deposit button */}
          <button
            className='btn btn-primary col-1'
            onClick={() => {
              dispatch({ type: "deposit", payload: amount });
              setAmount("");
            }}
          >
            Deposit
          </button>

          {/* Withdraw button */}
          <button
            className='btn btn-danger col-1 ml-4'
            onClick={() => {
              dispatch({ type: "withdrawal", payload: amount });
              setAmount("");
            }}
          >
            Withdraw
          </button>
        </div>

        {/* Full Name section */}
        <div className='row mt-2'>
          <div className='col-4'>
            {/* Input for entering the full name */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full name"
              value={fullName}
              onChange={(e) => {
                let data = e.target.value;
                setFullName(data);
              }}
            />
          </div>

          {/* Withdraw button for full name */}
          <button
            className='btn btn-danger col-1 ml-4'
            onClick={() => {
              dispatch({ type: "nameUpdate", payload: fullName });
              setFullName("");
            }}
          >
            Name
          </button>
        </div>

        {/* Mobile Number section */}
        <div className='row mt-2'>
          <div className='col-4'>
            {/* Input for entering the mobile number */}
            <input
              type="number"
              className="form-control"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => {
                let data = e.target.value;
                setMobileNumber(data);
              }}
            />
          </div>

          {/* Update button for mobile number */}
          <button
            className='btn btn-warning col-1 ml-4'
            onClick={() => {
              dispatch({ type: "mobileUpdate", payload: mobileNumber });
              setMobileNumber("");
            }}
          >
            Number
          </button>

        </div>
        <button
            className='btn btn-danger col-1 mt-3'
            onClick={() => {
              dispatch({ type: "reset" });
             
            }}
          >
            Reset
          </button>
      </div>
    </>
  );
};

export default Form;
