import cookie from 'react-cookies'

export const getCookie = key => {
  return cookie.load(key)
}

export const setCookie = value => {
  const now = new Date()
  now.setDate(now.getDate() + 14)

  return cookie.save('email', value, {
    expires: now,
    path: '/note'
  })
}

export const logout = () => {
  return cookie.remove('email', { path: '/' })
}