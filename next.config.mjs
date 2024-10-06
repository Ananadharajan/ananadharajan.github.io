/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    trailingSlash: true, // Optional: Adds trailing slashes for better static compatibility
    images: {
      unoptimized: true, // Disable image optimization
    },
  };
  
  export default nextConfig;
  
