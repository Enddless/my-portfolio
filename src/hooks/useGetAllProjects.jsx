import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { mock } from '../mock/mock';
import { getAllProjects } from '../store/slice/project';

function useGetAllProjects() {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [lastVisible, setLastVisible] = useState(6);

  const fetchProjects = () => {
    try {
      const limitedProjectsData = mock.projects.slice(0, lastVisible);
      setProjects((prev) => [...prev, ...limitedProjectsData]);
      setLastVisible(limitedProjectsData[limitedProjectsData.length - 1]);
      dispatch(getAllProjects(limitedProjectsData));
    } catch (error) {
      console.error('Ошибка при получении данных:', error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, fetchProjects };
}

export default useGetAllProjects;
