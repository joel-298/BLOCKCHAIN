/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: "images.pexels.com"
        }
      ]
    }
};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//       remotePatterns:[
//         {
//           protocol: 'https',
//           hostname: "images.pexels.com"
//         }
//       ]
//     }
//   }
  
//   module.exports = nextConfig