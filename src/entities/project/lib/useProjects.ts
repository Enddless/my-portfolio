import { useEffect } from 'react';


import { projectsMock } from '../api/mock';
import { selectProjects } from '../model/selectors';
import { setProjects } from '../model/slice';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

export function useProjects() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects);

  useEffect(() => {
    dispatch(setProjects(projectsMock));
  }, [dispatch]);

  return { projects };
}