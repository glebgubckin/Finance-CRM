import { updateProfile, updateValidate } from './profile.utils'
import { currentDate, currentMonth } from './charts.utils'
import { convertMoney } from './convertMoney'
import { convertCardNumber } from './card.utils'

const setTitle = (title: string) => document.title = title

export {
  setTitle,
  currentDate,
  currentMonth,
  updateProfile,
  updateValidate,
  convertMoney,
  convertCardNumber
}