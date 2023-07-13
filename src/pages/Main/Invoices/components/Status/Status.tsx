import { FC } from 'react'
import styles from './status.module.scss'

const Status: FC<{status: string}> = ({status}) => {

  let statusRender = <div />

  switch (status) {
    case 'paid':
      statusRender = <p className={styles.paid}>Paid</p>
      break
    case 'unpaid':
      statusRender = <p className={styles.unpaid}>Unpaid</p>
      break
    case 'pending':
      statusRender = <p className={styles.pending}>Pending</p>
      break  
  }

  return statusRender
}

export default Status