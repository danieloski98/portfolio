const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? 'https://portfolio-strapi-site-production.up.railway.app/api';

export const urls = {
    projects: '/projects',
    skills: '/skills',
}



export default API_URL;