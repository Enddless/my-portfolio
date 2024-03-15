import React from 'react';
import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Projects from '../../components/projects/index.jsx';
import Components from '../../components/components-block/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './styles.css';

function MainPage() {
  return (
    <>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>
      <div className='main__content'>
        <Skills />
        <Projects />
      </div>
      <Components />
      <Footer />
    </>
  );
}

export default MainPage;
