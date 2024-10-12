"use client";

import React from "react";
import styles from "./wallet.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Web3 from "web3";
const WalletPage = () => {
  const [web3, setWeb3] = useState();

  useEffect(() => {
    if (window) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link href="/" passHref>
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            className={styles.logo_img}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <h2>Connect your wallet ! </h2>
        <p>
          to unlock a seamless, secure, and innovative experience for managing
          your digital assets effortlessly !
        </p>
      </div>
      <div className={styles.button}>
        <button
          onClick={() => {
            if (!window.ethereum) {
              console.log("No Ethereum Account Found");
              return;
            }
            web3.eth.requestAccounts().then(function (accounts) {
              console.log(accounts);
              console.log(accounts[0]); // The user's primary Ethereum address
              web3.eth.defaultAccount = accounts[0];
              window.location.href = "/"; //TODO Change this
            });
          }}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
