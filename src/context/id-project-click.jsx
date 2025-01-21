import React, { useMemo } from 'react';

export const IdProjectContext = React.createContext();

export function IdProjectContextProvider({ children }) {
  const [idProject, setIdProject] = React.useState('');

  const providerInterface = useMemo(
    () => ({
      idProject,
      setIdProject
    }),
    [idProject]
  );

  return (
    <IdProjectContext.Provider value={providerInterface}>
      {children}
    </IdProjectContext.Provider>
  );
}
