import React from "react";
import { useRecoilValue } from "recoil";
import { registerFormInputsState } from "../../atoms/registerForm";
export default function Success() {
  const form = useRecoilValue(registerFormInputsState);

  return (
    <form>
      <div className="success-step">
        <h3>Registration successful!</h3>
        <p>
          <span>Name:</span>
          {form.name}
        </p>
        <p>
          <span>Mobile number:</span>
          {form.mobileNumber}
        </p>
        <p>
          <span>Address:</span>
          {form.address}
        </p>
      </div>
    </form>
  );
}
