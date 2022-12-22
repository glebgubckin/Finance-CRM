import { FC } from 'react'
import chip from '../../../../../assets/chip.svg'
import nfc from '../../../../../assets/nfc.svg'
import mastercard from '../../../../../assets/mastercard.svg'
import styles from './card.module.scss'

interface CardProps {
  personalNumbers: string,
  expirationDate: string
}

const Card: FC<CardProps> = ({personalNumbers, expirationDate}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.title}>Maglo.</span>
        <div className={styles.divider}></div>
        <span className={styles.subtitle}>Universal Bank</span>
      </div>
      <div className={styles.images}>
        <img src={chip} alt="chip" />
        <img src={nfc} alt="nfc" />
      </div>
      <div className={styles.info}>
        <p className={styles.numbers}>{personalNumbers}</p>
        <div className={styles.info__data}>
          <p className={styles.expDate}>{expirationDate}</p>
          <img src={mastercard} alt="mastercard" />
        </div>
      </div>
    </div>
  )
}

export default Card