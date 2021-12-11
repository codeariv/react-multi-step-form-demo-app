import React from "react";
import { RecoilRoot } from "recoil";
import RegisterForm from "./components/RegisterForm";

import "./App.css";
function App() {
  return (
    <RecoilRoot>
      <RegisterForm />
    </RecoilRoot>
  );
}

export default App;
