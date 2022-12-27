import { describe, test, expect } from 'vitest'
import { convertMoney } from './convertMoney'
import { updateValidate } from './profile'

describe('Convert Money Function', () => {
  test('positive integer', () => {
    expect(convertMoney(250)).toBe('+ $250')
  })

  test('positive float', () => {
    expect(convertMoney(250.25)).toBe('+ $250.25')
  })

  test('negative integer', () => {
    expect(convertMoney(-250)).toBe('- $250')
  })

  test('negative float', () => {
    expect(convertMoney(-250.25)).toBe('- $250.25')
  })

  test('zero', () => {
    expect(convertMoney(0)).toBe('- $0')
  })
})

describe('Update form validate', () => {
  test('strings empty', () => {
    expect(updateValidate('', '')).toBeFalsy()
  })

  test('one string empty', () => {
    expect(updateValidate('test', '')).toBeFalsy()
  })

  test('password length less 8', () => {
    expect(updateValidate('test123', 'test123')).toBeTruthy()
  })

  test('password not equals confirmPassword', () => {
    expect(updateValidate('test12311', 'test1231')).toBeTruthy()
  })

  test('password  equals confirmPassword', () => {
    expect(updateValidate('test12311', 'test12311')).toBeFalsy()
  })
})