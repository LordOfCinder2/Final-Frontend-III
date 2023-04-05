export const validateName=(name) => {
  return name.length > 5
}

export const validateEmail=(email) => {
  return email.includes('@')
}