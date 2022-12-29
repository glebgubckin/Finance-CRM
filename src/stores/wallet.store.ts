import { atom } from 'recoil'

interface IWalletStore {
  number: string,
  expDate: string,
  type: 'mastercard' | 'visa'
}

const walletStore = atom({
  key: 'wallet',
  default: [{
    number: '5495 7381 3759 2321',
    expDate: '09/25',
    type: 'mastercard'
  }] as IWalletStore[]
})

export default walletStore