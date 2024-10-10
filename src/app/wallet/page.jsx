import React from 'react'
import styles from "./wallet.module.css"
import Image from "next/image" ; 
import Link from "next/link" ; 
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
        <Link href="/" passHref><Image src="/logo.svg" alt="logo" width={0} height={0} className={styles.logo_img}/></Link>
      </div>
      <div className={styles.content}>
        <h2>Connect your wallet ! </h2> 
        <p>to unlock a seamless, secure, and innovative experience for managing
        your digital assets effortlessly !</p>
      </div>
      <div className={styles.content}>Connect your wallet !</div>
      <div className={styles.button}>
        <button
          onClick={() => {
            web3.eth.requestAccounts().then(function (accounts) {
              console.log(accounts);
              console.log(accounts[0]); // The user's primary Ethereum address
            });
          }}
        >
          Connect
        </button>
      </div>
    </div>
  )
}

export default WalletPage ;
