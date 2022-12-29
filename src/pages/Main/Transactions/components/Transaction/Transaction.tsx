import { FC } from 'react'
import { convertMoney } from '../../../../../utils'
import { ITransactions } from '../../transactions.data'
import styles from './transaction.module.scss'

const Transaction: FC<{transaction: ITransactions}> = ({transaction}) => {
  return (
    <tr>
      <td className={styles.column}>
        <p className={styles.title}>{transaction.name}</p>
        <p className={styles.company}>{transaction.company}</p>
      </td>
      <td className={styles.type}>{transaction.type}</td>
      <td className={styles.amount}>{convertMoney(transaction.amount)}</td>
      <td className={styles.date}>{transaction.date}</td>
      <td className={styles.id}>{transaction.invoiceId}</td>
      <td>
        <button className={styles.view}>View</button>
      </td>
    </tr>
  )
}

export default Transaction