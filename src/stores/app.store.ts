import { atom } from "recoil"

interface IAppStore {
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
  } as IAppStore
})

export default appStore 