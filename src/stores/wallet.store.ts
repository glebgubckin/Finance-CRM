import { atom } from 'recoil'

const walletStore = atom({
  key: 'wallet',
  default: [{
    number: '5495 7381 3759 2321',
    expDate: '09/25'
  }]
})

export default walletStore