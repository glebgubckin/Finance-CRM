import { FC } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts'
import { currentDate, currentMonth } from '../../../../../utils'
import styles from './chart.module.scss'

const data = [
  {
    name: `${currentMonth} ${currentDate  - 6}`,
    Income: 4000,
    Expenses: 5500,
    amt: 2400
  },
  {
    name: `${currentMonth} ${currentDate  - 5}`,
    Income: 6900,
    Expenses: 4800,
    amt: 3500
  },
  {
    name: `${currentMonth} ${currentDate  - 4}`,
    Income: 5000,
    Expenses: 7200,
    amt: 2400
  },
  {
    name: `${currentMonth} ${currentDate  - 3}`,
    Income: 3300,
    Expenses: 5500,
    amt: 3500
  },
  {
    name: `${currentMonth} ${currentDate  - 2}`,
    Income: 2200,
    Expenses: 3400,
    amt: 2400
  },
  {
    name: `${currentMonth} ${currentDate - 1}`,
    Income: 4800,
    Expenses: 3800,
    amt: 3500
  },
  {
    name: `${currentMonth} ${currentDate}`,
    Income: 3200,
    Expenses: 4700,
    amt: 2400
  }
]

const Chart: FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        Working Capital
      </span>
      <LineChart width={920} height={300} data={data}>
        <Line type="monotone" dataKey="Income" stroke="#C8EE44" />
        <Line type="monotone" dataKey="Expenses" stroke="#29A073" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Tooltip />
      </LineChart>
    </div>
  )
}

export default Chart