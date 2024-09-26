import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../store/slice/project';
import { useEffect } from 'react';
import { FirebaseError } from 'firebase/app';

function useGetAllProjects() {
  const dispatch = useDispatch();

  useEffect(() => {
    const projectsCollectionDB = collection(db, 'projects');

    const subscribeToComponents = (retries = 3) => {
      const unsubscribe = onSnapshot(
        projectsCollectionDB,
        (snapshot) => {
          const projects = snapshot.docs.map((doc) => ({
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
          }));
          dispatch(getAllProjects(projects));
        },
        (error) => {
          console.error('Ошибка при получении данных:', error.message);
          if (
            error instanceof FirebaseError &&
            error.code === 'unavailable' &&
            retries > 0
          ) {
            console.error('Нет соединения с Firestore. Повторная попытка подписки...');
            setTimeout(() => subscribeToComponents(retries - 1), 2000);
          } else {
            console.error('Не удалось получить данные после нескольких попыток.');
          }
        }
      );

      return unsubscribe;
    };

    const unsubscribe = subscribeToComponents();

    return () => unsubscribe();
  }, [dispatch]);

  return null;
}

export default useGetAllProjects;
