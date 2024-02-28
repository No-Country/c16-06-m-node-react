import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/categorias">Categorías</Link>
            </li>
            <li>
              <Link href="/acerca-de">Acerca de nosotros</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contacto</h3>
          <p>info@flixi.com</p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <Link href="https://www.facebook.com/">
                <FacebookLogo size={20} />
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <InstagramLogo size={20} />
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/">
                <TwitterLogo size={20} />
                Twitter
              </Link>
            </li>
           </ul>
        </div>
      </div>

      <p className={styles.footerText}>
        &copy; 2024 FLIXI. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
