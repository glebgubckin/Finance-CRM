import { FC } from 'react'
import styles from './transfer.module.scss'

interface TransferProps {
  person: string,
  date: string,
  amount: number
}

const Transfer: FC<TransferProps> = ({person, date, amount}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.name}>{person}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.amount}>- ${amount}</p>
    </div>
  )
}

export default Transfer