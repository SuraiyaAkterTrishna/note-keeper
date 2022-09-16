import { createContext, useState } from 'react';
import useArchives from '../hooks/useArchives';
import useDeleteNotes from '../hooks/useDeleteNotes';
import useNotes from '../hooks/useNotes';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider 
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;