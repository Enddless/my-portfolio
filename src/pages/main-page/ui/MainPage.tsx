import { Advantages } from '@widgets/advantages';
import { Contacts } from '@widgets/contacts';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { Lead } from '@widgets/lead';
import { ProjectsSection } from '@widgets/projects-section';
import { Skills } from '@widgets/skills';

import { useProjects } from '@/entities/project';

import './MainPage.scss';

function MainPage() {
  const { projects } = useProjects();

  return (
    <>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>

      <div className='main__content'>
        <ProjectsSection projectsList={projects} />
        <Advantages />
        <Skills />
        <Contacts />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;