import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  query,
  limit,
  startAfter,
  orderBy
} from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllLayouts } from '../store/slice/project';
import { FirebaseError } from 'firebase/app';

function useGetAllLayouts() {
  const dispatch = useDispatch();
  const [lastVisible, setLastVisible] = useState(null);
  const [layouts, setLayouts] = useState([]);

  const fetchLayouts = (retries = 3) => {
    const layoutsCollectionDB = collection(db, 'layouts');
    // Добавляем сортировку по полю sort
    const layoutsQuery = lastVisible
      ? query(layoutsCollectionDB, orderBy('sort'), limit(6), startAfter(lastVisible))
      : query(layoutsCollectionDB, orderBy('sort'), limit(6)); // Сортировка по полю sort

    const unsubscribe = onSnapshot(
      layoutsQuery,
      (snapshot) => {
        const newLayouts = snapshot.docs.map((doc) => ({
          id: doc.data().id,
          images: doc.data().images,
          alt: doc.data().alt,
          deploy: doc.data().deploy,
          github: doc.data().github,
          name: doc.data().name,
          stack: doc.data().stack,
          text: doc.data().text,
          type: doc.data().type,
          sources: doc.data().sources,
          preview: doc.data().preview,
          sort: doc.data().sort
        }));

        setLayouts((prev) => [...prev, ...newLayouts]);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
        dispatch(getAllLayouts(newLayouts));
      },
      (error) => {
        console.error('Ошибка при получении данных:', error.message);
        if (
          error instanceof FirebaseError &&
          error.code === 'unavailable' &&
          retries > 0
        ) {
          console.error('Нет соединения с Firestore. Повторная попытка подписки...');
          setTimeout(() => fetchLayouts(retries - 1), 200);
        } else {
          console.error('Не удалось получить данные после нескольких попыток.');
        }
      }
    );

    return unsubscribe;
  };

  useEffect(() => {
    fetchLayouts();
  }, []);

  return { layouts, fetchLayouts };
}

export default useGetAllLayouts;
