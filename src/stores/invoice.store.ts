import { atom } from 'recoil'

enum Status {
  paid = 'paid',
  unpaid = 'unpaid',
  pending = 'pending'
}

interface IInvoice {
  name: string,
  invoiceID: string,
  date: string,
  type: string,
  amount: number,
  status: Status,
}

const invoiceStore = atom({
  key: 'invoice',
  default: [
    { name: 'Gadget Gallery LTD', invoiceID: 'MGL524874', date: '22 Dec 2022', type: 'Technology', amount: 420.84, status: Status.paid },
    { name: 'Figma Subscription', invoiceID: 'MGL524250', date: '21 Dec 2022', type: 'Technology', amount: -244.80, status: Status.pending },
    { name: 'Jack Dawson Eric', invoiceID: 'MGL524876', date: '19 Dec 2022', type: 'Technology', amount: 200, status: Status.pending },
    { name: 'UIHUT Subscription', invoiceID: 'MGL524140', date: '23 Dec 2022', type: 'Technology', amount: -84, status: Status.unpaid },
    { name: 'Citi Bank Ltd.', invoiceID: 'MGL524245', date: '18 Dec 2022', type: 'Technology', amount: 478, status: Status.unpaid },
    { name: 'Bitcoin Transaction', invoiceID: 'MGL524254', date: '16 Dec 2022', type: 'Technology', amount: -257.36, status: Status.paid },
    { name: 'Netflix Subscription', invoiceID: 'MGL524487', date: '17 Dec 2022', type: 'Technology', amount: -36.84, status: Status.paid },
    { name: 'Sajib Rahman', invoiceID: 'MGL524598', date: '15 Dec 2022', type: 'Technology', amount: 152.99, status: Status.paid }
  ] as IInvoice[]
})

export default invoiceStore