export const convertMoney = (value: number): string => {
  return `${value > 0 ? '+' : '-'} $${Math.abs(value)}`
}