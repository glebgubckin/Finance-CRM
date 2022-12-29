import { atom } from 'recoil'

export interface ITransactions {
  name: string,
  company: string,
  type: string,
  amount: number,
  date: string,
  invoiceId: string
}

const transactionStore = atom({
  key: 'transactions',
  default: [
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124877' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobiles', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124585' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124124' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0128544' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0122143' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124458' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124245' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0127749' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124465' },
    { name: 'Iphone 13 Pro MAX', company: 'Apple. Inc', type: 'Mobile', amount: 1032, date: '19 Dec 2022', invoiceId: 'MGL0124789' }
  ] as ITransactions[]
})

export default transactionStore