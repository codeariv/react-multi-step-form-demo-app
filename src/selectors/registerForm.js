import { selector } from "recoil";
import { registerFormInputsState } from "../atoms/registerForm";

export const mobileNumberLength = selector({
  key: "mobileNumberLength", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const form = get(registerFormInputsState);
    const lengthOfMobileNumber = form.mobileNumber.length;
    return lengthOfMobileNumber;
  },
});
