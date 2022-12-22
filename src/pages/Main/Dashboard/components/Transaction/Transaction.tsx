import { FC } from 'react'
import styles from './transaction.module.scss'

interface TransactionProps {
  img?: string,
  name: string,
  company: string,
  type: string,
  amount: number,
  date: string
}

const Transaction: FC<TransactionProps> = ({img, name, company, type, amount, date}) => {
  return (
    <tr className={styles.wrapper}>
      <th className={styles.good} align='left'>
        {/* <img className={styles.img} src={img} alt={name} /> */}
        <div className={styles.info}>
          <span className={styles.title}>{name}</span>
          <span className={styles.company}>{company}</span>
        </div>
      </th>
      <th className={styles.column}>
        {type}
      </th>
      <th className={`${styles.column} ${styles.column__amount}`}>
        ${amount}
      </th>
      <th className={styles.column}>
        {date}
      </th>
    </tr>
  )
}

export default Transaction