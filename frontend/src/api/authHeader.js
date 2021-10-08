export function authHeader() {
  const token = window.localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function getTokenString() {
  const token = window.localStorage.getItem('token');
  return token || '';
}
