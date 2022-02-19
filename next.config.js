const securityHeaders = [];

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' vitals.vercel-insights.com;
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
  img-src https://*;
`;

module.exports = {
  images: {
    domains: ['static.wikia.nocookie.net', 'images.wikia.nocookie.net', 'apkresult.com', 'www.wantedinmilan.com']
  },
}