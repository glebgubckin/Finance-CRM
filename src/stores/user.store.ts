import { atom } from "recoil"

interface IUserStore {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
}

const user: string | null = localStorage.getItem('user')
const currentUser: IUserStore = user ? JSON.parse(user) : {}

const userStore = atom({
  key: 'userStore',
  default: {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone
  } as IUserStore
})

export default userStore