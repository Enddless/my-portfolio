import ButtonDetails from '../button-details';

function Layout({ data, page }) {
  const contentComments = page === 'details';
  return (
    <>
      <div className='detail__item'>
        Name project:
        <p>&quot;{data.name}&quot;</p>
      </div>
      <div className='detail__item'>
        About:
        <p>{data.text}</p>
      </div>
      <div className='detail__item'>
        <p>Stack: {data.stack}</p>
      </div>

      {data.organizationLink !== '' && (
        <div className='detail__item'>
          <p>
            Organisation:{' '}
            <a href={data.organizationLink} className='detail__link'>
              {data.organizationName}
            </a>
          </p>
        </div>
      )}
      {contentComments && data.comments !== '' && (
        <div className='detail__item'>
          Note:
          <p>{data.comments}</p>
        </div>
      )}

      <div className='detail__links'>
        {data.deploy !== '' && (
          <a href={data.deploy} target='_blank'>
            <ButtonDetails text='Deploy' />
          </a>
        )}
        {data.github !== '' && (
          <a href={data.github} target='_blank'>
            <ButtonDetails text='Github' />
          </a>
        )}
      </div>
    </>
  );
}

export default Layout;
