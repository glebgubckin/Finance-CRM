export const convertCardNumber = (number: string): string => {
  return number.split('').map((l, index) => {
    if (index === 3 || index === 7 || index === 11) return l + ' '
    else return l
  }).join('')
}