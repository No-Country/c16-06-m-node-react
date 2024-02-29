import React from "react";
import {button, btn1, btn2, btn3} from "./Button.module.css";
import Link from "next/link";

const Button = ({children, className, to}) => {

    let styles = {
        btn1,
        btn2,
        btn3
    }

  return (
    <>
      {
        typeof(to) === "string" ? 
        <Link className={[button, styles[className]].join(" ")} href={to}>{children}</Link> : 
        <button className={[button, styles[className]].join(" ")}>{children}</button>
      }
    </>
  );
};

export default Button;