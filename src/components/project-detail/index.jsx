import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import '../../styles/styles.scss';
import Layout from '../layout-data/index.jsx';
import SwiperComponent from '../swiper/index.jsx';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/index.jsx';

function Detail() {
  window.scrollTo(0, 0);

  const path = useParams().id;

  const projectsData = useSelector((state) => state.portfolioData.projects);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (projectsData) {
      const foundProject = projectsData.find((project) => project.path === path);
      setDetails(foundProject);
    }
  }, [path, projectsData]);

  return (
    <div className='detail'>
      <div className='detail__inner container'>
        {!details ? (
          <Spinner />
        ) : (
          <>
            <SwiperComponent images={details.images} />
            <Layout data={details} page='details' />

            <div className='detail__forward'>
              <Link to='/'>Назад </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;
