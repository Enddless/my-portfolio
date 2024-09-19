// import { useQuery } from '@tanstack/react-query';
// import { collection, getDocs } from '@firebase/firestore';
// import { db } from '../firebase/firebase-config';

// const fetchLayouts = async () => {
//   const layoutsCollectionDB = collection(db, 'layouts');
//   const citySnapshot = await getDocs(layoutsCollectionDB);
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
//     comments: doc.data().comments
//   }));
// };

// function useGetAllLayouts() {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['layouts'],
//     queryFn: fetchLayouts
//   });

//   return { data, error, isLoading };
// }

// export default useGetAllLayouts;

import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllLayouts } from '../store/slice/project';

function useGetAllLayouts() {
  const dispatch = useDispatch();
  useEffect(() => {
    const layoutsCollectionDB = collection(db, 'layouts');
    const getItems = async () => {
      const citySnapshot = await getDocs(layoutsCollectionDB);
      dispatch(
        getAllLayouts(
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
            comments: doc.data().comments
          }))
        )
      );
    };
    getItems();
  }, [dispatch]);

  return <div></div>;
}

export default useGetAllLayouts;
