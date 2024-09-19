import Layout from '../layout-data';

function ComponentCard({ project }) {
  return (
    <>
      <img src={project.mainPhoto} alt='photo project' width='100%' loading='lazy' />
      <div className='component__item-description'>
        <Layout data={project} />
      </div>
    </>
  );
}

export default ComponentCard;
