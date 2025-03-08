export interface StrapiImage {
  url: string;
  formats: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
  alternativeText?: string;
}

export interface IProject {
    appstoreUrl: string;
    createdAt: string;
    description: any[];
    documentId: string;
    githubUrl: string;
    id: number;
    playstoreUrl: string;
    slug: string;
    technologies: string[];
    title: string;
    type: 'WEB'|'APP';
    updatedAt: string;
    image: StrapiImage;
    liveLink: string
}