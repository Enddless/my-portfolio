import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, limit, startAfter } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../store/slice/project';
import { FirebaseError } from 'firebase/app';

function useGetAllProjects() {
  const dispatch = useDispatch();
  const [lastVisible, setLastVisible] = useState(null);
  const [projects, setProjects] = useState([]);

  const fetchProjects = (retries = 3) => {
    const projectsCollectionDB = collection(db, 'projects');
    const projectsQuery = lastVisible
      ? query(projectsCollectionDB, limit(4), startAfter(lastVisible))
      : query(projectsCollectionDB, limit(4));

    const unsubscribe = onSnapshot(
      projectsQuery,
      (snapshot) => {
        const newProjects = snapshot.docs.map((doc) => ({
          id: doc.data().id,
          images: doc.data().images,
          deploy: doc.data().deploy,
          github: doc.data().github,
          name: doc.data().name,
          stack: doc.data().stack,
          text: doc.data().text,
          type: doc.data().type,
          video: doc.data().video,
          sources: doc.data().sources,
          alt: doc.data().alt,
          preview: doc.data().preview,
          sort: doc.data().sort
        }));

        setProjects((prev) => [...prev, ...newProjects]);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
        dispatch(getAllProjects(newProjects));
      },
      (error) => {
        console.error('Ошибка при получении данных:', error.message);
        if (
          error instanceof FirebaseError &&
          error.code === 'unavailable' &&
          retries > 0
        ) {
          console.error('Нет соединения с Firestore. Повторная попытка подписки...');
          setTimeout(() => fetchProjects(retries - 1), 200);
        } else {
          console.error('Не удалось получить данные после нескольких попыток.');
        }
      }
    );

    return unsubscribe;
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, fetchProjects };
}

export default useGetAllProjects;
