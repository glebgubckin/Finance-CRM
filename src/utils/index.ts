export const setTitle = (title: string) => document.title = title

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

export const currentDate = new Date().getDate()
const currentMonthNumber = new Date().getMonth()
export const currentMonth = months[currentMonthNumber].slice(0, 3)