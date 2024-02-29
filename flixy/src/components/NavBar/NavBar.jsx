import Link from 'next/link';
import Image from 'next/image';
import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Envuelve la imagen con Link */}
          
            <Image src="/logoFlixi/flixy logo.svg" alt="Logo" width={50} height={50} />
          
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
     
      <Link href="/login" >
        <UserCircle size={32} />  
        <span className={styles.loginLink}>Login</span>
      </Link>
    </nav>
  );
};

export default Navbar;
