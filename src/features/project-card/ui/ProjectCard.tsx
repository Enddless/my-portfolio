import { ProjectStack, type Project } from '@/entities/project';
import { LinkButton } from '@/shared/ui';

import './ProjectCard.scss';

const previewModules = import.meta.glob<string>('/src/shared/assets/projects/*.webp', {
  eager: true,
  import: 'default'
});

const getPreviewUrl = (fileName: string): string =>
  previewModules[`/src/shared/assets/projects/${fileName}`] ?? '';

const SIZES =
  '(max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 33vw';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const stackItems = project.stack.split(', ').map((item) => item.trim());
  const previewUrl = getPreviewUrl(project.preview);
  const previewSmallUrl = getPreviewUrl(project.previewSmall);

  return (
    <li className='project-card'>
      <div className='project-card__preview'>
        <img
          alt={`это ${project.alt}`}
          decoding='async'
          height='200'
          loading='lazy'
          sizes={SIZES}
          src={previewUrl}
          srcSet={`${previewSmallUrl} 600w, ${previewUrl} 1200w`}
          width='320'
        />

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
    </li>
  );
}

export default ProjectCard;
