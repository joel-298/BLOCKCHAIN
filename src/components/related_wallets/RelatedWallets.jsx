
import Image from 'next/image'
import styles from './Related.module.css'

const Related_wallets = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child1}>
        <h4>Other Wallets</h4>
      </div>
      <div className={styles.child2}>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
        <div className={styles.component}>
          <Image src="/images.jpg" alt="" height={25} width={25} />
          <h4 className={styles.heading}>cryptoboss.eth</h4>
          <h4 className={styles.number}>68</h4>
        </div>
      </div>
    </div>
  )
}

export default Related_wallets