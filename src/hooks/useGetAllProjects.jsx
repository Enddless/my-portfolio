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

            deploy: doc.data().deploy,
            github: doc.data().github,
            name: doc.data().name,
            stack: doc.data().stack,
            text: doc.data().text,

            video: doc.data().video,
            sources: doc.data().sources,
            alt: doc.data().alt,
            preview: doc.data().preview
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
            setTimeout(() => subscribeToComponents(retries - 1), 200); // Увеличено время ожидания
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
