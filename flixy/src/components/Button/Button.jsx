import React from "react";
import {button, btn1, btn2, btn3} from "./Button.module.css";

const Button = ({children, className}) => {

    let styles = {
        btn1,
        btn2,
        btn3
    }

  return (
    <>
      <button className={[button, styles[className]].join(" ")}>{children}</button>
    </>
  );
};

export default Button;