import React from "react";
import {button, btn1, btn2, btn3} from "./Button.module.css";
import Link from "next/link";

const Button = ({children, className, to, style, as}) => {

    let styles = {
        btn1,
        btn2,
        btn3
    }

  return (
    <>
      {
        typeof(to) === "string" ? 
        <Link style={style} className={[button, styles[className]].join(" ")}  href={to} as={as}>{children}</Link> : 
        <button style={style} className={[button, styles[className]].join(" ")}>{children}</button>
      }
    </>
  );
};

export default Button;