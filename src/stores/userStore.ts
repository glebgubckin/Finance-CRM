import { atom } from "recoil"

const user = localStorage.getItem('user')
const currentUser = user ? JSON.parse(user) : {}

export const userStore = atom({
  key: 'userStore',
  default: {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone
  }
})