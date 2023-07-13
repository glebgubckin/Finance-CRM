import { FC } from 'react'
import styles from './widget.module.scss'

interface WidgetProps {
  title: string,
  amount: number,
  icon: string
}

const Widget: FC<WidgetProps> = ({title, amount, icon}) => {
  return (
    <div className={styles.wrapper}>
      <img src={icon} alt="wallet" />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.amount}>{`$${amount}`}</span>
      </div>
    </div>
  )
}

export default Widget