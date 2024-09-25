import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../store/slice/project';
import { useEffect } from 'react';
import { FirebaseError } from 'firebase/app'; // Импортируем FirebaseError

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

          // Проверяем, является ли ошибка связанной с отсутствием соединения
          if (error instanceof FirebaseError && error.code === 'unavailable') {
            console.error('Нет соединения с Firestore. Повторная попытка подписки...');
            if (retries > 0) {
              setTimeout(() => {
                console.log(`Повторная попытка подписки... Осталось попыток: ${retries}`);
                subscribeToComponents(retries - 1); // Повторная подписка
              }, 2000); // Задержка 2 секунды перед повторным запросом
            } else {
              console.error('Не удалось получить данные после нескольких попыток.');
            }
          } else {
            console.error('Неизвестная ошибка:', error);
          }
        }
      );

      return unsubscribe;
    };

    const unsubscribe = subscribeToComponents(); // Изначальный вызов функции подписки

    // Чистим подписку при размонтировании компонента
    return () => unsubscribe();
  }, [dispatch]);

  return null; // Возвращаем null, если ничего не нужно рендерить
}

export default useGetAllProjects;
