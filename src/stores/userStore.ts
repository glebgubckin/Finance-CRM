import { atom } from "recoil";


export const userStore = atom({
  key: 'userStore',
  default: {
    firstName: 'Gleb',
    lastName: 'Gubkin',
    email: 'glebgubckin@bk.ru',
    phone: '+79246843875'
  }
})