import { atom } from "recoil"

export const appStore = atom({
  key: 'appStore',
  default: {
    darkMode: false,
    navTitle: 'Dashboard',
    notificationsCount: 0
  }
})