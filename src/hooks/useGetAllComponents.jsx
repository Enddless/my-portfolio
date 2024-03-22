import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { useDispatch } from 'react-redux';
import { getAllComponents } from '../store/slice/projects';

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
            comment: doc.data().comment
          }))
        )
      );
    };
    getItems();
  }, [dispatch]);

  return <div></div>;
}

export default useGetAllComponents;
