import request from '@/utils/request'

export function login(data) {
  // debugger
  return request({
    url: '/apis/Indexlogin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/apis/Indexlogin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/apis/Indexlogin/logout',
    method: 'post'
  })
}
