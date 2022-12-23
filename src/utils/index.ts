import { updateProfile, updateValidate } from './profile'
import { currentDate, currentMonth } from './chartsData'

const setTitle = (title: string) => document.title = title

export {
  setTitle,
  currentDate,
  currentMonth,
  updateProfile,
  updateValidate
}