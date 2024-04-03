import { Link } from 'react-router-dom';
import ButtonDetails from '../button-details/index.jsx';
import Layout from '../layout-data/index.jsx';

function ProjectCard({ project }) {
  const isPortfolioProject = project.path === 'portfolio';
  return (
    <>
      <div className='project__item-description'>
        <Layout data={project} />
      </div>

      {isPortfolioProject ? (
        <div className='project__item-photo project__item-details'>
          <img src={project.mainPhoto} alt='photo project' height='450px' />
        </div>
      ) : (
        <Link to={`/project/${project.path}`} className='project__item-photo'>
          <div className='project__item-details'>
            <img src={project.mainPhoto} alt='photo project' height='450px' />
            <ButtonDetails text='Посмотреть детали' />
          </div>
        </Link>
      )}
    </>
  );
}

export default ProjectCard;
