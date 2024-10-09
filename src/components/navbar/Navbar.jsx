import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from 'next/link'; // Import the Link component


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link href="/" passHref><Image src="/logo.svg" alt="Logo" width={0} height={0} className={styles.logo_img}/></Link>
      </div>
      <div className={styles.content}>
        <div className={styles.content_items}>    
            <Link href="/#home" passHref>
                Home
            </Link>
        </div>
        <div className={styles.content_items}>
            <Link href="/#about" passHref>
                About
            </Link>    
        </div>
        <div className={styles.content_items}>        
            <Link href="/#contact" passHref>
                Contact
            </Link>
        </div>
        <div className={styles.content_items}>
            <Link href="/wallet" passHref>
                wallet
            </Link>
        </div>
      </div>
      <div className={styles.menu}>
        <p>Menu</p>
        <Image src="/menu.svg" alt="Logo" width={0} height={0} className={styles.menu_logo_img}/>
      </div>
    </div>
  );
};

export default Navbar;






// // EXPLANATIONS : 
// For example:

// Without passHref, sometimes the button or text inside a Link might not know the correct address to go to when clicked.
// With passHref, you're making sure that the button or text will take you to the right page when you click on it.
// So, in your case, passHref makes sure that when you click on "Contact" or "Home," it will properly navigate to the correct section of the page.