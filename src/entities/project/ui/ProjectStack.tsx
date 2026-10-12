import './ProjectStack.scss';

interface ProjectStackProps {
  items?: string[];
}

function ProjectStack({ items = [] }: ProjectStackProps) {
  if (!items.length) return null;

  return (
    <ul className='project-stack'>
      {items.map((item) => (
        <li className='project-stack__badge' key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ProjectStack;