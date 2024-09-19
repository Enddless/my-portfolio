// import { useQuery } from '@tanstack/react-query';
// import { collection, getDocs } from '@firebase/firestore';
// import { db } from '../firebase/firebase-config';

// const fetchComponents = async () => {
//   const componentsCollectionDB = collection(db, 'components');
//   const citySnapshot = await getDocs(componentsCollectionDB);
//   return citySnapshot.docs.map((doc) => ({
//     id: doc.data().id,
//     mainPhoto: doc.data().mainPhoto,
//     deploy: doc.data().deploy,
//     github: doc.data().github,
//     name: doc.data().name,
//     organizationLink: doc.data().organizationLink,
//     organizationName: doc.data().organizationName,
//     stack: doc.data().stack,
//     text: doc.data().text,
//     comments: doc.data().comments
//   }));
// };

// function useGetAllComponents() {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['components'],
//     queryFn: fetchComponents
//   });

//   return { data, error, isLoading };
// }

// export default useGetAllComponents;

import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllComponents } from '../store/slice/project';

function useGetAllComponents() {
  const dispatch = useDispatch();
  useEffect(() => {
    const componentsCollectionDB = collection(db, 'components');
    const getItems = async () => {
      const citySnapshot = await getDocs(componentsCollectionDB);
      dispatch(
        getAllComponents(
          citySnapshot.docs.map((doc) => ({
            id: doc.data().id,
            mainPhoto: doc.data().mainPhoto,
            deploy: doc.data().deploy,
            github: doc.data().github,
            name: doc.data().name,
            organizationLink: doc.data().organizationLink,
            organizationName: doc.data().organizationName,
            stack: doc.data().stack,
            text: doc.data().text,
            comments: doc.data().comments
          }))
        )
      );
    };
    getItems();
  }, [dispatch]);

  return <div></div>;
}

export default useGetAllComponents;
