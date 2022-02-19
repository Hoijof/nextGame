export function isUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/');
}