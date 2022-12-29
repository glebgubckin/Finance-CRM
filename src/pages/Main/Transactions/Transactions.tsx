import { FC, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore, transactionStore } from '../../../stores'
import styles from './transactions.module.scss'
import Transaction from './components/Transaction/Transaction';
import Search from '../../../components/Search/Search';

const Transactions: FC = () => {

  const [search, setSearch] = useState("")

  setTitle('Transactions')
  const [app, setApp] = useRecoilState(appStore)
  const [transactions] = useRecoilState(transactionStore)

  const searchedTransactions = useMemo(() => {
    if (search === "") {
      return transactions
    }
    return transactions.filter(t => {
      return (
        t.name.includes(search)
        || t.company.includes(search)
        || t.type.includes(search)
        || t.amount.toString().includes(search)
        || t.invoiceId.includes(search)
      )
    })
  }, [search, transactions])
  
  useEffect(() => {
    setApp({...app, navTitle: 'Transactions'})
  }, [])

  return (
    <div className={styles.wrapper}>
      <Search value={search} setValue={setSearch} width={350} placeholder='Search anything on Transactions' />
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
            searchedTransactions.map(t => <Transaction key={t.invoiceId} transaction={t} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions