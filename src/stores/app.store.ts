import { atom } from "recoil"

const appStore = atom({
  key: 'appStore',
  default: {
    darkMode: false,
    navTitle: 'Dashboard',
    notificationsCount: 0
  }
})

export default appStore 