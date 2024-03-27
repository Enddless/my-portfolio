import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../store/slice/projects';

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
            comment: doc.data().comment
          }))
        )
      );
    };
    getItems();
  }, [dispatch]);

  return <div></div>;
}

export default useGetAllProjects;
