import Layout from '../layout-data/index.jsx';

function Card({ project }) {
  // const isPortfolioProject = project.path === 'portfolio';

  return (
    <>
      <div className='project__item-description'>
        <Layout data={project} />
      </div>

      <div className='project__item-photo'>
        <img src={project.mainPhoto} alt='photo project' height='450px' />
      </div>
    </>
  );
}

export default Card;
