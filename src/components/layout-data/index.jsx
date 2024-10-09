import LinkButton from '../link-button';

function Layout({ data }) {
  const stackArray = data.stack.split(', ').map((item) => item.trim());
  return (
    <>
      <div className='layout__item'>
        <p className='layout__item-name'>{data.name}</p>
      </div>
      <div className='layout__item'>
        <p className='layout__item-text'>{data.text}</p>
      </div>
      <div className='layout__item layout__item-stack'>
        {stackArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className='layout__item layout__item-links'>
        {data.deploy !== '' && <LinkButton text='Deploy' href={data.deploy} />}
        {data.github !== '' && <LinkButton text='Github' href={data.github} />}
      </div>
    </>
  );
}

export default Layout;
