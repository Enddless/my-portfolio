// import { useQuery } from '@tanstack/react-query';
// import { collection, getDocs } from '@firebase/firestore';
// import { db } from '../firebase/firebase-config';

// const fetchProjects = async () => {
//   const projectsCollectionDB = collection(db, 'projects');
//   const citySnapshot = await getDocs(projectsCollectionDB);
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
//     comments: doc.data().comments,
//     video: doc.data().video
//   }));
// };

// function useGetAllProjects() {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['projects'],
//     queryFn: fetchProjects
//   });

//   return { data, error, isLoading };
// }

// export default useGetAllProjects;

import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../store/slice/project';

function useGetAllProjects() {
  const dispatch = useDispatch();
  useEffect(() => {
    const projectsCollectionDB = collection(db, 'projects');
    const getItems = async () => {
      const citySnapshot = await getDocs(projectsCollectionDB);
      dispatch(
        getAllProjects(
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
            comments: doc.data().comments,
            video: doc.data().video
          }))
        )
      );
    };
    getItems();
  }, [dispatch]);

  return <div></div>;
}

export default useGetAllProjects;
