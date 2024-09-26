import Layout from '../layout-data';

function ComponentCard({ project }) {
  return (
    <>
      <picture className='component__item-photo'>
        <source srcSet={project.sources} type='image/webp' />
        <img
          src={project.mainPhoto}
          alt={project.alt}
          height={300}
          width={680}
          // loading='lazy'
          // decoding='sync'
        />
      </picture>

      <div className='component__item-description'>
        <Layout data={project} />
      </div>
    </>
  );
}

export default ComponentCard;
