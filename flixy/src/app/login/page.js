'use client'
import React from "react";
// import {button, btn1, btn2, btn3} from "./Button.module.css";
import Link from "next/link";
import {loginSection, section1, section2, s1Title, s1Desc, s2Title, s2Desc, initSection, input} from './page.module.css';
import Button from "@/components/Button/Button";

const Login = ({}) => {

  return (
    <>
      <div className={loginSection}>
        <div className={section1}>
            <div className="logo oversized" style={{height:"70px", marginTop:"150px"}}></div>
            <span className={s1Title}>Descubre un mundo de documentales</span>
            <p className={s1Desc}>Explora un catálogo lleno de historias fascinantes y emocinantes</p>
        </div>
        <div className={section2}>
            <div className={initSection}>
                <span className={s2Title}>¡Bienvenido!</span>
                <p className={s2Desc}>Inicia sesión para disfrutar tu contenido</p>
                <input className={input} type="text" placeholder="Usuario"></input>
                <input className={input} type="password" placeholder="Contraseña"></input>
                <Button className="btn1" style={{width:"100%"}}>Iniciar sesion</Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;