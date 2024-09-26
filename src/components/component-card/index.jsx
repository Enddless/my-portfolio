import Layout from '../layout-data';

function ComponentCard({ project }) {
  return (
    <>
      <picture className='component__item-photo'>
        <img
          src={project.mainPhoto}
          srcSet={project.sources}
          alt={project.alt}
          height={300}
          width={680}
          // loading='lazy'
          decoding='async'
        />
      </picture>

      <div className='component__item-description'>
        <Layout data={project} />
      </div>
    </>
  );
}

export default ComponentCard;
