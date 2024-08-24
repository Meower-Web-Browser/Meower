/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            port: "",
            hostname:  "www.google.com.br",
            pathname: "/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
            },
        ]
    }
}

module.exports = nextConfig
