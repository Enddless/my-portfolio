import LinkButton from '../link-button';

function Layout({ data }) {
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

      <div className='detail__links'>
        {data.deploy !== '' && <LinkButton text='Deploy' href={data.deploy} />}
        {data.github !== '' && <LinkButton text='Github' href={data.github} />}
      </div>
    </>
  );
}

export default Layout;
