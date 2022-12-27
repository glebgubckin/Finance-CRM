import { FC } from 'react'
import { convertMoney } from '../../../../../utils'
import styles from './payments.module.scss'

interface PaymentsProps {
  payments: {
    id: number,
    title: string,
    date: string,
    price: number
  }[]
}

const Payments: FC<PaymentsProps> = ({payments}) => {
  return (
    <>
      {
        payments.map(p => {
          return (
            <div key={p.id} className={styles.payment}>
              <div>
                <p className={styles.payment__title}>{p.title}</p>
                <p className={styles.payment__subtitle}>{p.date}</p>
              </div>
              <p className={styles.payment__price}>{convertMoney(p.price)}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default Payments