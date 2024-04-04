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
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (projectsData) {
      const foundProject = projectsData.find((project) => project.path === path);
      if (foundProject) {
        setDetails(foundProject);
        setDataLoaded(true);
      }
    }
  }, [path, projectsData]);

  return (
    <div className='detail'>
      <div className='detail__inner container'>
        {!dataLoaded ? (
          <Spinner />
        ) : (
          <>
            <Layout data={details} page='details' />
            {details.video && (
              <video src={details.video} type='video/mp4' controls muted>
                Ваш браузер не поддерживает тег видео.
              </video>
            )}
            <SwiperComponent images={details.images} />

            <Link to='/' className='detail__forward'>
              Назад
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;
