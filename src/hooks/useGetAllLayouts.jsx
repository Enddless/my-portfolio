// import { useEffect } from 'react';
// import { collection, onSnapshot } from '@firebase/firestore';
// import { db } from '../store/firebase-config';
// import { useDispatch } from 'react-redux';
// import { getAllLayouts } from '../store/slice/project';
// import { FirebaseError } from 'firebase/app';

// function useGetAllLayouts() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const layoutsCollectionDB = collection(db, 'layouts');

//     const subscribeToComponents = (retries = 3) => {
//       const unsubscribe = onSnapshot(
//         layoutsCollectionDB,
//         (snapshot) => {
//           const layouts = snapshot.docs.map((doc) => ({
//             id: doc.data().id,
//             images: doc.data().images,
//             mainPhoto: doc.data().mainPhoto,
//             alt: doc.data().alt,
//             deploy: doc.data().deploy,
//             github: doc.data().github,
//             name: doc.data().name,
//             stack: doc.data().stack,
//             text: doc.data().text,
//             path: doc.data().path,
//             comments: doc.data().comments,
//             sources: doc.data().sources
//           }));
//           dispatch(getAllLayouts(layouts));
//         },
//         (error) => {
//           console.error('Ошибка при получении данных:', error.message);
//           if (
//             error instanceof FirebaseError &&
//             error.code === 'unavailable' &&
//             retries > 0
//           ) {
//             console.error('Нет соединения с Firestore. Повторная попытка подписки...');
//             setTimeout(() => subscribeToComponents(retries - 1), 200);
//           } else {
//             console.error('Не удалось получить данные после нескольких попыток.');
//           }
//         }
//       );

//       return unsubscribe;
//     };

//     const unsubscribe = subscribeToComponents();

//     return () => unsubscribe();
//   }, [dispatch]);

//   return null;
// }

// export default useGetAllLayouts;
import { useQuery } from '@tanstack/react-query';
import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { FirebaseError } from 'firebase/app';

const fetchLayouts = async () => {
  return new Promise((resolve, reject) => {
    const layoutsCollectionDB = collection(db, 'layouts');

    const unsubscribe = onSnapshot(
      layoutsCollectionDB,
      (snapshot) => {
        const layouts = snapshot.docs.map((doc) => ({
          id: doc.data().id,
          images: doc.data().images,
          mainPhoto: doc.data().mainPhoto,
          alt: doc.data().alt,
          deploy: doc.data().deploy,
          github: doc.data().github,
          name: doc.data().name,
          stack: doc.data().stack,
          text: doc.data().text,
          path: doc.data().path,
          comments: doc.data().comments,
          sources: doc.data().sources
        }));
        resolve(layouts);
      },
      (error) => {
        console.error('Ошибка при получении данных:', error.message);
        reject(error);
      }
    );

    return () => unsubscribe();
  });
};

function useGetAllLayouts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['layouts'],
    queryFn: fetchLayouts,
    refetchOnWindowFocus: false,
    retry: (error) => {
      if (error instanceof FirebaseError && error.code === 'unavailable') {
        return true;
      }
      return false;
    }
  });

  if (isLoading) {
    return { layouts: [], isLoadingLayouts: true, errorLayouts: null };
  }

  if (error) {
    console.error('Не удалось получить данные:', error.message);
    return { layouts: [], isLoadingLayouts: false, error };
  }

  return { layouts: data, isLoadingLayouts: false, errorLayouts: null };
}

export default useGetAllLayouts;
