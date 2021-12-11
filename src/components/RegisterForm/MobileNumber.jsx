import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  registerFormInputsState,
  registerFormStepState,
} from "../../atoms/registerForm";
import { mobileNumberLength } from "../../selectors/registerForm";

export default function MobileNumber() {
  const [form, setForm] = useRecoilState(registerFormInputsState);
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);
  const lengthOfMobileNumber = useRecoilValue(mobileNumberLength);

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("address");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Enter your mobile number (10 digits)"
        onChange={(e) =>
          setForm({
            ...form,
            mobileNumber: e.target.value,
          })
        }
        value={form.mobileNumber}
      />
      {lengthOfMobileNumber === 10 ? (
        <p className="success-message">Mobile number is valid</p>
      ) : null}
      <button
        type="submit"
        disabled={lengthOfMobileNumber == 10 ? false : true}
      >
        Continue
      </button>
      <button onClick={() => setFormStep("name")}>Back</button>
    </form>
  );
}
