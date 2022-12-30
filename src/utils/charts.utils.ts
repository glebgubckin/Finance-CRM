const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const currentMonthNumber = new Date().getMonth()
export const currentDate = new Date().getDate()
export const currentMonth = months[currentMonthNumber]
