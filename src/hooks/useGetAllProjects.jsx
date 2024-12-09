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

// import { useQuery } from '@tanstack/react-query';
// import { collection, onSnapshot } from '@firebase/firestore';
// import { db } from '../store/firebase-config';
// import { FirebaseError } from 'firebase/app';

// // Функция для получения всех проектов
// const fetchProjects = async () => {
//   return new Promise((resolve, reject) => {
//     const projectsCollectionDB = collection(db, 'projects');

//     const unsubscribe = onSnapshot(
//       projectsCollectionDB,
//       (snapshot) => {
//         const projects = snapshot.docs.map((doc) => ({
//           id: doc.data().id,
//           images: doc.data().images,
//           mainPhoto: doc.data().mainPhoto,
//           deploy: doc.data().deploy,
//           github: doc.data().github,
//           name: doc.data().name,
//           stack: doc.data().stack,
//           text: doc.data().text,
//           path: doc.data().path,
//           comments: doc.data().comments,
//           video: doc.data().video,
//           sources: doc.data().sources,
//           alt: doc.data().alt
//         }));
//         resolve(projects);
//       },
//       (error) => {
//         console.error('Ошибка при получении данных:', error.message);
//         reject(error);
//       }
//     );

//     // Возвращаем функцию отписки
//     return () => unsubscribe();
//   });
// };

// function useGetAllProjects() {
//   const { data, error, isLoading } = useQuery(['projects'], fetchProjects, {
//     // Опции для управления кэшированием и повторными попытками
//     refetchOnWindowFocus: false, // Не перезагружать данные при фокусе на окне
//     retry: (failureCount, error) => {
//       // Логика для повторных попыток
//       if (error instanceof FirebaseError && error.code === 'unavailable') {
//         return true; // Повторяем запрос
//       }
//       return false; // Не повторяем
//     }
//   });

//   if (isLoading) {
//     return { projects: [], isLoading: true, error: null };
//   }

//   if (error) {
//     console.error('Не удалось получить данные:', error.message);
//     return { projects: [], isLoading: false, error };
//   }

//   return { projects: data, isLoading: false, error: null };
// }

// export default useGetAllProjects;
