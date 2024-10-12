"use client";

import React, { useEffect, useState } from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {

  
  const [navVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(prevState => !prevState);
  };

  const handleLinkClick = () => {
    // Hide the nav_div when any link is clicked
    setNavVisible(false);
  };

  useEffect(() => {
    // On initial render, hide nav_div if it's visible
    if (navVisible) {
      setNavVisible(false);
    }
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.logo_container}>
        <Link href="/" passHref>
          <Image src="/logo.svg" alt="Logo" width={0} height={0} className={styles.logo_img} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.content_items}>
          <Link href="/#home" passHref onClick={handleLinkClick}>
            Home
          </Link>
        </div>
        <div className={styles.content_items}>
          <Link href="/#about" passHref onClick={handleLinkClick}>
            About
          </Link>
        </div>
        <div className={styles.content_items}>
          <Link href="/#contact" passHref onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
        <div className={styles.content_items}>
          <Link href="/wallet" passHref onClick={handleLinkClick}>
            Wallet
          </Link>
        </div>
      </div>

      <div className={styles.menu} onClick={toggleNavVisibility}>
        <p>Menu</p>
        <Image src="/menu.svg" alt="Menu" width={0} height={0} className={styles.menu_logo_img} />
      </div>

      {navVisible && (
        <div className={styles.nav_div}>
          <div className={styles.child1}>
            <Link href="/" passHref>
              <Image src="/logo.svg" alt="Logo" width={0} height={0} className={styles.logo_img} />
            </Link>
            <Image src="/cancel.png" alt="cancel" width={10} height={10} className={styles.cancel} onClick={handleLinkClick} />
          </div>
          <div className={styles.child2}>
            <div className={styles.content_items}>
              <Link href="/#home" passHref onClick={handleLinkClick} className={styles.links}>
                Home
              </Link>
            </div>
            <div className={styles.content_items}>
              <Link href="/#about" passHref onClick={handleLinkClick} className={styles.links}>
                About
              </Link>
            </div>
            <div className={styles.content_items}>
              <Link href="/#contact" passHref onClick={handleLinkClick} className={styles.links}>
                Contact
              </Link>
            </div>
            <div className={styles.content_items}>
              <Link href="/wallet" passHref onClick={handleLinkClick} className={styles.links}>
                Wallet
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;






// // EXPLANATIONS : 
// For example:

// Without passHref, sometimes the button or text inside a Link might not know the correct address to go to when clicked.
// With passHref, you're making sure that the button or text will take you to the right page when you click on it.
// So, in your case, passHref makes sure that when you click on "Contact" or "Home," it will properly navigate to the correct section of the page.