import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [deleteNotes, setDeleteNotes] = useState([]);

  return (
    <DataContext.Provider
      value={{
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
