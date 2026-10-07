export const ProjectType = {
  COMMERCE: 'commerce project',
  PET: 'pet project'
} as const;

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];

export interface Project {
  id: string;
  name: string;
  description: string;
  alt: string;
  preview: string;
  previewSmall: string;
  deploy: string;
  github: string;
  stack: string;
  type: ProjectType;
}