import React from "react";
import { useRecoilState } from "recoil";
import {
  registerFormInputsState,
  registerFormStepState,
} from "../../atoms/registerForm";

export default function MobileNumber() {
  const [form, setForm] = useRecoilState(registerFormInputsState);
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        autoFocus
        rows={5}
        type="text"
        placeholder="Enter your address"
        onChange={(e) =>
          setForm({
            ...form,
            address: e.target.value,
          })
        }
        value={form.address}
      />
      <button type="submit">Continue</button>
      <button onClick={() => setFormStep("mobileNumber")}>Back</button>
    </form>
  );
}
