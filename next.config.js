const securityHeaders = [];

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`;

module.exports = {
  images: {
    domains: ['static.wikia.nocookie.net', 'images.wikia.nocookie.net', 'apkresult.com']
  },
}