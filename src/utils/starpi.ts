import { strapi } from '@strapi/client';

const STRAPI_CLIENT = strapi({ baseURL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? 'https://portfolio-strapi-site-production.up.railway.app/api', auth: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN });

export default STRAPI_CLIENT;

const PROJECTS = async () => STRAPI_CLIENT.collection('projects');
const SKILLS = async () => STRAPI_CLIENT.collection('skills');

export  {
    PROJECTS,
    SKILLS
}
