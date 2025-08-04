import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllLayouts } from '../store/slice/project';
import { mock } from '../mock/mock';

function useGetAllLayouts() {
  const dispatch = useDispatch();
  const [layouts, setLayouts] = useState([]);

  const fetchLayouts = () => {
    try {
      const layoutsData = mock.layouts;
      setLayouts((prev) => [...prev, ...layoutsData]);
      dispatch(getAllLayouts(layoutsData));
    } catch (error) {
      console.error('Ошибка при получении данных:', error.message);
    }
  };

  useEffect(() => {
    fetchLayouts();
  }, []);

  return { layouts, fetchLayouts };
}

export default useGetAllLayouts;
