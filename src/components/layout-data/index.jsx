import './styles.css';

function Layout({ data, page }) {
  const contentComments = page === 'details';
  return (
    <>
      <div className='project__name'>
        <span>Project</span>: {data.name}
      </div>
      <div className='project__text'>
        <span>About project:</span> {data.text}
      </div>
      {data.deploy !== '' && (
        <div className='project__link'>
          <span>Deploy:</span>
          <a href={data.deploy}> поюзать здесь</a>
        </div>
      )}
      {data.github !== '' && (
        <div className='project__link'>
          <span>Github:</span>
          <a href={data.github}> ознакомиться здесь </a>
        </div>
      )}
      <div className='project__stack'>
        <span>Stack:</span> {data.stack}
      </div>

      {data.organizationLink !== '' && (
        <div className='project__organization'>
          <span>Organization:</span>
          <a href={data.organizationLink}>{data.organizationName}</a>
        </div>
      )}

      {contentComments && data.comments !== '' && (
        <div className='project__text'>
          <span>Примечание</span>: {data.comments}
        </div>
      )}
    </>
  );
}

export default Layout;
