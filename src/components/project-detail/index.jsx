import { useParams } from 'react-router-dom';
import { projectsData } from '../projects/data.js';
import { Link } from 'react-router-dom';
import './styles.css';
import Layout from '../layout-data/index.jsx';
import SwiperComponent from '../swiper/index.jsx';

function Detail() {
  const path = useParams().id;
  const foundProject = projectsData.find((project) => project.path === path);

  return (
    <div className='detail'>
      <div className='detail__container'>
        <Layout data={foundProject} page='details' />
        <SwiperComponent images={foundProject.images} />
        <div className='project__details'>
          <Link to='/'>Назад </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
