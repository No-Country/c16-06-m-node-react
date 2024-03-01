import React from 'react';
import {footer, footerContent, sectionTitle, phrase, exploreList, titleItem, item, rightSide, leftSide, socialMedia, socialLinks, policy, copyright, patron, patronEl} from './Footer.module.css';
import {
    FacebookLogo,
    InstagramLogo,
    TwitterLogo,
    } from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link'

const Footer = ({  }) => {
  return (
    <>
      <footer className={footer}>
        <div className={patron}>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
            <div className={patronEl}></div>
        </div>

        <div className={footerContent}>
            <div className={leftSide}>
                <div>
                    <span className={sectionTitle}>
                        ¡Mantente informado!
                    </span>
                    <p className={phrase}>
                        Nuevos documentales cada semana.
                    </p>
                </div>

                <ul className={exploreList}>
                    <li className={titleItem}>Explora:</li>
                    {/* <div> */}
                    <li className={item}>
                        <Link href="">Inicio</Link>
                    </li>

                    <li className={item}>
                        <Link href="">Lo nuevo</Link>
                    </li>

                    <li className={item}>
                        <Link href="">Popular</Link>
                    </li>
                    {/* </div> */}
                </ul>
            </div>

            <div className={rightSide}>
                <div className={socialMedia}>
                    <i className="logo"></i>
                    <div className={socialLinks}>
                        <Link href="">
                            <FacebookLogo size={28}/>
                        </Link>
                        <Link href="">
                            <InstagramLogo size={28}/>
                        </Link>
                        <Link href="">
                            <TwitterLogo size={28}/>
                        </Link>
                    </div>
                </div>

                <Link href="" className={policy}>
                    Políticas de privacidad
                </Link>

                <p className={copyright}>
                    NoCountry C16-06. Todos los derechos reservados.
                </p>
            </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;