import { atom } from "recoil"

interface IApp {
  darkMode: boolean,
  navTitle: string,
  notificationsCount: number
}

const appStore = atom({
  key: 'appStore',
  default: {
    darkMode: false,
    navTitle: 'Dashboard',
    notificationsCount: 0
  } as IApp
})

export default appStore 