// import { useEffect } from 'react';
// import { collection, onSnapshot } from '@firebase/firestore';
// import { db } from '../store/firebase-config';
// import { useDispatch } from 'react-redux';
// import { getAllComponents } from '../store/slice/project';
// import { FirebaseError } from 'firebase/app'; // Импортируем FirebaseError

// function useGetAllComponents() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const componentsCollectionDB = collection(db, 'components');

//     const subscribeToComponents = (retries = 3) => {
//       const unsubscribe = onSnapshot(
//         componentsCollectionDB,
//         (snapshot) => {
//           const components = snapshot.docs.map((doc) => ({
//             id: doc.data().id,
//             mainPhoto: doc.data().mainPhoto,
//             webpPhoto: doc.data().webpPhoto,
//             deploy: doc.data().deploy,
//             github: doc.data().github,
//             name: doc.data().name,
//             stack: doc.data().stack,
//             text: doc.data().text,
//             comments: doc.data().comments,
//             alt: doc.data().alt,
//             sources: doc.data().sources
//           }));
//           dispatch(getAllComponents(components));
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
//           console.error('Ошибка при получении данных:', error.message);

//           if (error instanceof FirebaseError && error.code === 'unavailable') {
//             console.error('Нет соединения с Firestore. Повторная попытка подписки...');
//             if (retries > 0) {
//               setTimeout(() => {
//                 console.log(`Повторная попытка подписки... Осталось попыток: ${retries}`);
//                 subscribeToComponents(retries - 1);
//               }, 200);
//             } else {
//               console.error('Не удалось получить данные после нескольких попыток.');
//             }
//           } else {
//             console.error('Неизвестная ошибка:', error);
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

// export default useGetAllComponents;
