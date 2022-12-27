import { FC, useEffect } from 'react'
import Widget from './components/Widget/Widget'
import Chart from './components/Chart/Chart'
import Transaction from './components/Transaction/Transaction'
import { FiChevronRight } from "react-icons/fi"
import wallet from '../../../assets/wallet.svg'
import wallet2 from '../../../assets/wallet2.svg'
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore, walletStore } from '../../../stores/'
import { Link } from 'react-router-dom'
import Card from './components/Card/Card'
import Transfer from './components/Transfer/Transfer'
import styles from './dashboard.module.scss'

const Dashboard: FC = () => {

  setTitle('Dashboard')
  const [appState, setAppState] = useRecoilState(appStore)
  const [walletState, setWalletState] = useRecoilState(walletStore)

  const transfers = [
    { id: 0, person: 'Saleh Ahmed', date: 'December 21, 2022 at 01:36', amount: 435 },
    { id: 1, person: 'Delowar Hossain', date: 'December 19, 2022 at 11:58', amount: 132 },
    { id: 2, person: 'Moinul Hasan Nayem', date: 'December 17, 2022 at 09:46', amount: 826 },
    { id: 3, person: 'Dr. Jubed Ahmed', date: 'December 16, 2022 at 12:15', amount: 246 },
    { id: 4, person: 'Jakir Alp', date: 'December 14, 2022 at 13:28', amount: 195 }
  ]
  
  useEffect(() => {
    setAppState({...appState, navTitle: 'Dashboard'})
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.widgets}>
          <Widget title="Total balance" amount={5240.21} icon={wallet} />
          <Widget title="Total spending" amount={250.80} icon={wallet} />
          <Widget title="Total saved" amount={550.25} icon={wallet2} />
        </div>
        <Chart />
        <div className={styles.recent}>
          <div className={styles.recent__controls}>
            <span className={styles.recent__title}>Recent Transaction</span>
            <Link className={styles.recent__link} to="transactions">
              View All
              <FiChevronRight color='29A073' size={16} />
            </Link>
          </div>
          <table className={styles.recent__table}>
            <thead>
              <tr>
                <th align='left'>NAME/BUSINESS</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              <Transaction
                name='Iphone 14 Pro MAX'
                company='Apple. Inc'
                type='Mobile'
                amount={1048}
                date='19 december 2022'
              />
              <Transaction
                name='Netflix Subscription'
                company='Netflix'
                type='Entertainment'
                amount={100}
                date='18 december 2022'
              />
              <Transaction
                name='Figma Subscription'
                company='Figma. Inc'
                type='Software'
                amount={120}
                date='12 december 2022'
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.side}>
        <span className={styles.side__title}>Wallet</span>
        <Card personalNumbers={walletState[0].number} expirationDate={walletState[0].expDate} />
        <div className={styles.transfers}>
          <div className={styles.transfers__info}>
            <p>Scheduled Transfers</p>
            <Link className={styles.transfers__link} to="#">
              View All
              <FiChevronRight color='29A073' size={16} />
            </Link>
          </div>
          {
            transfers.map(t => {
              return <Transfer key={t.id} person={t.person} date={t.date} amount={t.amount} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard