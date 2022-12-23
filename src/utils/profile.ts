import { Form } from "../pages/Main/Settings/Settings"

export const updateProfile = (form: Form) => {
  const data: string = JSON.stringify({
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    password: form.newPassword
  })
  localStorage.setItem('user', data)
}

export const updateValidate = (password1: string, password2: string) => {
  if (password1.length === 0 && password2.length === 0) {
    return false
  }
  return !(password1 === password2 && password1.length > 7 && password2.length > 7)
}