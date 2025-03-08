import { IProject } from "@/models/projects";
import STRAPI_CLIENT from "@/utils/starpi";

function getCollections() {
    const COLLECTIONS = STRAPI_CLIENT.collection('projects');
    return COLLECTIONS;
}

export async function getProjects() {
    try {
        const response = await getCollections().find({
            populate: {
                image: {
                    fields: ['url', 'formats', 'alternativeText']
                }
            },
            pagination: {
                page: 1,
                withCount: true,
            }
        });
        console.log(response.meta);

        return {
            data: response.data as IProject[],
            meta: response.meta.pagination,
        }
    } catch (error: any) {
        console.log(error);
        throw new Error("An error occured while getting projects");
    }
}