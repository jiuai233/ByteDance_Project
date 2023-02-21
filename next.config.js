/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

// module.exports = {

//   async rewrites() { 
//     return [ 
//      //接口请求 前缀带上/api-text/
//       { source: '/api-text/:path*', destination: `http://localhost:1337:path*` }

//     ]
//   },
//   nextConfig : {
//     reactStrictMode: true,
//   }
// }
