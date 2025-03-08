import { IProject } from "@/models/projects";
import { ISkill } from "@/models/skills";
import STRAPI_CLIENT from "@/utils/starpi";

function getCollections() {
    const COLLECTIONS = STRAPI_CLIENT.collection('skills');
    return COLLECTIONS;
}

export async function getSkills() {
    try {
        const response = await getCollections().find({
            populate: {
                image: {
                    fields: ['url', 'formats', 'alternativeText']
                }
            },
            pagination: {

                withCount: true,
            }
        });
        console.log(response.meta);

        return {
            data: response.data as any[],
            meta: response.meta.pagination,
        }
    } catch (error: any) {
        console.log(error);
        throw new Error("An error occured while getting projects");
    }
}