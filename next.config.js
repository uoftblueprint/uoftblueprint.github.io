/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;
