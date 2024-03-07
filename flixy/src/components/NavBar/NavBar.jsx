import Link from 'next/link';

import Image from 'next/image';
// import {UserCircle} from "@phosphor-icons/react/dist/ssr"
// import Image from 'next/image';
// import { UserCircle } from "@phosphor-icons/react/dist/ssr";

import styles from './Navbar.module.css';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">

          <span>
            <Image src="/logoFlixi/flixy logo.svg" alt="Logo" width={50} height={50} />
          
          </span>
         
          
            {/* <Image src="/logoFlixi/flixy logo.svg" alt="Logo" width={50} height={50} /> */}
          

        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">

            
              <span>Home</span>
            

          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/lo-nuevo">

            
              <span>Lo Nuevo</span>
            

          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/lo-popular">

            
              <span>Lo Popular</span>
            

          </Link>
        </li>
      </ul>
     

      {/* <Link href="/login" >
      <UserCircle size={32} />  
        <span className={styles.loginLink}>Login</span>
      </Link> */}

      <div className={styles.buttonZone}>
        {/* Página de registro de usuario */}
        <Link href="@/Registrarse/Registrarse">  
          <Button className="btn2">Registarse</Button>
        </Link>
        {/* Página de inicio de sesión */}
        <Link href="@Inicio/Inicio">
          <Button className="btn1">Iniciar sesión</Button>
        </Link>
      </div>
      
        
        

      {/* <Link href="/login" >
        <UserCircle size={32} />  
        <span className={styles.loginLink}>Login</span>
      </Link> */}

    </nav>
  );
};

export default Navbar;
