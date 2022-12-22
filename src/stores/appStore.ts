import { atom } from "recoil"

export const app = atom({
  key: 'app',
  default: {
    darkMode: false,
    navTitle: 'Dashboard',
    notificationsCount: 0
  }
})