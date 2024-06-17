import { createContext, useState } from 'react';

export const DialogContext = createContext({
  toggleModal: false,
  setToggleModal: () => {}
});

export const DialogProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <DialogContext.Provider value={{ toggleModal, setToggleModal }}>
      {children}
    </DialogContext.Provider>
  );
};
