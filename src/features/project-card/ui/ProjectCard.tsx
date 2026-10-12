import { ProjectStack, type Project } from '@/entities/project';
import { LinkButton } from '@/shared/ui';

import './ProjectCard.scss';

const assetModules = import.meta.glob<string>('/src/shared/assets/projects/*.{webp,jpg}', {
  eager: true,
  import: 'default'
});

const getAssetUrl = (fileName: string): string =>
  assetModules[`/src/shared/assets/projects/${fileName}`] ?? '';

const getPreviewUrl = (fileName: string): string => getAssetUrl(fileName);

const getPreviewUrlJpg = (fileName: string): string =>
  getAssetUrl(fileName.replace('.webp', '.jpg'));

const SIZES =
  '(max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 33vw';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const stackItems = project.stack.split(', ').map((item) => item.trim());
  const previewUrl = getPreviewUrl(project.preview);
  const previewSmallUrl = getPreviewUrl(project.previewSmall);
  const previewUrlJpg = getPreviewUrlJpg(project.preview);
  const previewSmallUrlJpg = getPreviewUrlJpg(project.previewSmall);

  return (
    <div className='project-card'>
      <div className='project-card__preview'>
        <picture>
          <source
            type='image/webp'
            srcSet={`${previewSmallUrl} 600w, ${previewUrl} 1200w`}
            sizes={SIZES}
          />
          <img
            alt={`это ${project.alt}`}
            decoding='async'
            height='200'
            loading='lazy'
            sizes={SIZES}
            src={previewUrlJpg}
            srcSet={`${previewSmallUrlJpg} 600w, ${previewUrlJpg} 1200w`}
            width='320'
          />
        </picture>

        <div className='project-card__links'>
          {project.deploy !== '' && (
            <LinkButton
              href={project.deploy}
              icon='deploy'
              label={`Открыть сайт ${project.name}`}
            />
          )}
          {project.github !== '' && (
            <LinkButton
              href={project.github}
              icon='github'
              label={`Репозиторий ${project.name} на GitHub`}
            />
          )}
        </div>
      </div>

      <h3 className='project-card__name'>{project.name}</h3>

      <p className='project-card__description'>{project.description}</p>

      <ProjectStack items={stackItems} />
    </div>
  );
}

export default ProjectCard;
