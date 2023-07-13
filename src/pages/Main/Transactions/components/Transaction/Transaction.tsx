import { FC } from 'react'
import { ITransaction } from '../../../../../stores/transaction.store'
import { convertMoney } from '../../../../../utils'
import styles from './transaction.module.scss'

const Transaction: FC<{transaction: ITransaction}> = ({transaction}) => {
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