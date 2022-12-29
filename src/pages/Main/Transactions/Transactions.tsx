import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores'
import styles from './transactions.module.scss'
import transactions from './transactions.data';
import Transaction from './components/Transaction/Transaction';

const Transactions: FC = () => {

  setTitle('Transactions')
  const [appState, setAppState] = useRecoilState(appStore)
  
  useEffect(() => {
    setAppState({...appState, navTitle: 'Transactions'})
  }, [])

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.left}>NAME/BUSINESS</th>
            <th className={styles.left}>TYPE</th>
            <th className={styles.left}>AMOUNT</th>
            <th className={styles.left}>DATE</th>
            <th className={styles.left}>INVOICE ID</th>
            <th className={styles.left}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(t => <Transaction key={t.invoiceId} transaction={t} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions