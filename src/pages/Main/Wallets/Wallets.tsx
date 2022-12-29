import { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore, walletStore } from '../../../stores'
import { FiArrowUp, FiArrowDown, FiPlus } from "react-icons/fi"
import Card from '../../../components/Card/Card'
import Payments from './components/Payments/Payments'
import styles from './wallets.module.scss'

const Wallets: FC = () => {

  setTitle('My Wallets')
  const balance = 5240
  const [appState, setAppState] = useRecoilState(appStore)
  const [walletState] = useRecoilState(walletStore)

  const payments = [
    { id: 0, title: 'Payoneer', date: '20 Dec 2022, 06:55', price: 4800.24 },
    { id: 1, title: 'Remitly', date: '20 Dec 2022, 06:55', price: -1800.24 },
    { id: 2, title: 'Wise', date: '20 Dec 2022, 06:55', price: -24.32 },
    { id: 3, title: 'Paypal', date: '20 Dec 2022, 06:55', price: -400.32 }
  ]

  const upcomingPayments = [
    { id: 0, title: 'Google Ads', date: '03 Jan 2022, 15:45', price: -250.20 },
    { id: 1, title: 'Starling', date: '02 Jan 2022, 18:36', price: -350.24 }
  ]
  
  useEffect(() => {
    setAppState({...appState, navTitle: `My Wallets`})
  }, [])
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.wallets}>
        <Card personalNumbers={walletState[0].number} expirationDate={walletState[0].expDate} type={walletState[0].type} />
        <div className={styles.balance}>
          <div>
            <p className={styles.balance__title}>Your balance</p>
            <div className={styles.balance__subrow}>
              <p className={styles.balance__total}>${balance}</p>
              <p className={balance > 0 ? styles.balance__top : styles.balance__bottom}>
                {
                  balance > 0 ? <FiArrowUp /> : <FiArrowDown />
                }
                12.54%
              </p>
            </div>
          </div>
          <div className={styles.balance__row}>
            <div className={styles.balance__column}>
              <p className={styles.balance__title}>Currency</p>
              <p className={styles.balance__subtitle}>USD / US Dollar</p>
            </div>
            <div className={styles.balance__column}>
              <p className={styles.balance__title}>Status</p>
              <p className={styles.balance__subtitle}>Active</p>
            </div>
          </div>
        </div>
        <button className={styles.addCard}>
          <FiPlus />
          Add New Card
        </button>
      </div>
      <div className={styles.payments}>
        <p className={styles.payments__title}>My Payments</p>
        <p className={styles.payments__subtitle}>Today</p>
        <div className={styles.payments__list}>
          <Payments payments={payments} />
        </div>
        <p className={styles.payments__title}>Upcoming Payments</p>
        <p className={styles.payments__subtitle}>Next month</p>
        <div className={styles.payments__list}>
          <Payments payments={upcomingPayments} />
        </div>
      </div>
    </div>
  )
}

export default Wallets