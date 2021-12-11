import React from "react";
import { useRecoilValue } from "recoil";
import Name from "./Name";
import MobileNumber from "./MobileNumber";
import Address from "./Address";
import Success from "./Success";

import { registerFormStepState } from "../../atoms/registerForm";

function App() {
  const formStep = useRecoilValue(registerFormStepState);

  return (
    <div className="register-form">
      {formStep === "name" ? (
        <Name />
      ) : formStep === "mobileNumber" ? (
        <MobileNumber />
      ) : formStep === "address" ? (
        <Address />
      ) : formStep === "success" ? (
        <Success />
      ) : null}
    </div>
  );
}

export default App;
