export function authHeader() {
  if (window.localStorage.getItem('user')) {
    const token = window.localStorage.getItem('token') || '';
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }

    return {
    };
  }
  return {
  };
}

export function getTokenString() {
  if (window.localStorage.getItem('user')) {
    const token = window.localStorage.getItem('token') || '';
    if (token) {
      return token;
    }
    return null;
  }
  return null;
}
