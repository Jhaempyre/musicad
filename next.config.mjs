/** @type {import('next').NextConfig} */

/* the domains are allowed for getting data from online client . */

const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    }
};

export default nextConfig;
