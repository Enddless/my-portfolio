import { useContext } from 'react';
import { DialogContext } from '../providers/PriceCardProvider';

const useDialog = () => {
  const value = useContext(DialogContext);
  return value;
};

export default useDialog;
