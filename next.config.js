/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    GRAPHQL_SERVER: "https://serverlisting.vercel.app/graph",
    SHIPPING: "Pay To Delivery Partner",
    Discount: "10",
  },
  headers: [
    {
      key: "X-Frame-Options",
      value: "DENY",
    },

    ,
    {
      key: "Referrer-Policy",
      value: "origin-when-cross-origin",
    },
  ],
};

module.exports = nextConfig;
