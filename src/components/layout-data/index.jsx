import React from 'react';

function Layout({ data }) {
  return (
    <>
      <div className='project__name'>
        &lt;Project&gt;: <span>{data.name}</span>
      </div>
      <div className='project__text'>
        &lt;About project&gt;: <span>{data.text}</span>
      </div>
      <div className='project__link'>
        &lt;Deploy&gt;:
        <span>
          <a href={data.deploy}> here</a>
        </span>
      </div>
      <div className='project__link'>
        &lt;Github&gt;:
        <span>
          <a href={data.github}> here</a>
        </span>
      </div>
      <div className='project__stack'>
        &lt;Stack&gt;: <span>{data.stack}</span>
      </div>
      <div className='project__organization'>
        &lt;Organization&gt;:
        <span>
          <a href={data.organizationLink}>{data.organizationName}</a>
        </span>
      </div>
    </>
  );
}

export default Layout;
