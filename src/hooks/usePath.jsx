import { useContext } from 'react';
import { PathContext } from '../providers/PathProvider';

const usePath = () => {
  const value = useContext(PathContext);
  return value;
};

export default usePath;
