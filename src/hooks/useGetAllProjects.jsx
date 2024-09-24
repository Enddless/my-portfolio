// import { useQuery } from '@tanstack/react-query';
// import { collection, getDocs } from '@firebase/firestore';
// import { db } from '../firebase/firebase-config';

// const fetchProjects = async () => {
//   const projectsCollectionDB = collection(db, 'projects');
//   const citySnapshot = await getDocs(projectsCollectionDB);
//   return citySnapshot.docs.map((doc) => ({
//     id: doc.data().id,
//     images: doc.data().images,
//     mainPhoto: doc.data().mainPhoto,
//     deploy: doc.data().deploy,
//     github: doc.data().github,
//     name: doc.data().name,
//     organizationLink: doc.data().organizationLink,
//     organizationName: doc.data().organizationName,
//     stack: doc.data().stack,
//     text: doc.data().text,
//     path: doc.data().path,
//     comments: doc.data().comments,
//     video: doc.data().video
//   }));
// };

// function useGetAllProjects() {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['projects'],
//     queryFn: fetchProjects
//   });

//   return { data, error, isLoading };
// }

// export default useGetAllProjects;import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../store/slice/project';
import { useEffect } from 'react';

function useGetAllProjects() {
  const dispatch = useDispatch();

  useEffect(() => {
    const projectsCollectionDB = collection(db, 'projects');

    const getItems = async (retries = 3) => {
      try {
        const citySnapshot = await getDocs(projectsCollectionDB);
        dispatch(
          getAllProjects(
            citySnapshot.docs.map((doc) => ({
              id: doc.data().id,
              images: doc.data().images,
              mainPhoto: doc.data().mainPhoto,
              deploy: doc.data().deploy,
              github: doc.data().github,
              name: doc.data().name,
              organizationLink: doc.data().organizationLink,
              organizationName: doc.data().organizationName,
              stack: doc.data().stack,
              text: doc.data().text,
              path: doc.data().path,
              comments: doc.data().comments,
              video: doc.data().video,
              sources: doc.data().sources,
              alt: doc.data().alt
            }))
          )
        );
      } catch (error) {
        console.error('Ошибка при получении данных:', error.message);

        if (retries > 0) {
          console.error('Повторная попытка запроса...', retries);
          setTimeout(() => {
            getItems(retries - 1); // Повторный запрос
          }, 2000); // Задержка 2 секунды перед повторным запросом
        } else {
          console.error('Не удалось получить данные после нескольких попыток:', error);
        }
      }
    };

    getItems();
  }, [dispatch]);

  return null; // Возвращаем null, если ничего не нужно рендерить
}

export default useGetAllProjects;
