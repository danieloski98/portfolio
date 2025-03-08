import { StrapiImage } from "./projects";

export interface ISkill {
    id: number;
    createdAt: string;
    updatedAt: string;
    image: StrapiImage;
    title: string;
}