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
    setFormStep("mobileNumber");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Enter your name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        value={form.name}
      />
      <button type="submit">Continue</button>
    </form>
  );
}
