import { useEffect } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllLayouts } from '../store/slice/project';
import { FirebaseError } from 'firebase/app';

function useGetAllLayouts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const layoutsCollectionDB = collection(db, 'layouts');

    const subscribeToComponents = (retries = 3) => {
      const unsubscribe = onSnapshot(
        layoutsCollectionDB,
        (snapshot) => {
          const layouts = snapshot.docs.map((doc) => ({
            id: doc.data().id,
            images: doc.data().images,

            alt: doc.data().alt,
            deploy: doc.data().deploy,
            github: doc.data().github,
            name: doc.data().name,
            stack: doc.data().stack,
            text: doc.data().text,

            sources: doc.data().sources,
            preview: doc.data().preview
          }));
          dispatch(getAllLayouts(layouts));
        },
        (error) => {
          console.error('Ошибка при получении данных:', error.message);
          if (
            error instanceof FirebaseError &&
            error.code === 'unavailable' &&
            retries > 0
          ) {
            console.error('Нет соединения с Firestore. Повторная попытка подписки...');
            setTimeout(() => subscribeToComponents(retries - 1), 200);
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

export default useGetAllLayouts;
