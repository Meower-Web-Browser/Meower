/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images:{
    domains:["upload.wikimedia.org"]
  }
}

module.exports = nextConfig
