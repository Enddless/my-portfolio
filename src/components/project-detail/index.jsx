import { useParams } from 'react-router-dom';
import { projectsData } from '../projects/data.js';
import { Link } from 'react-router-dom';
import Galery from '../slick-slider/index.jsx';
import './styles.css';
import Layout from '../layout-data/index.jsx';

function Detail() {
  const path = useParams().id;
  const foundProject = projectsData.find((project) => project.path === path);

  return (
    <>
      <div className='detail__container'>
        <Layout data={foundProject} />
        <Galery images={foundProject.images} />
      </div>
      <Link to='/'>Назад</Link>
    </>
  );
}

export default Detail;
