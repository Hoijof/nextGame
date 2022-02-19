export function isUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/');
}

export function setToken(token) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem('token', token);
}

export function deleteToken() {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem('token');
}

export function getToken() {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem('token');
}

export function getAuthHeaders() {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
}
