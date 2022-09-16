import { useEffect, useState } from 'react';

const useDeleteNotes = () => {
    const [deleteNotes, setDeleteNotes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/trash")
          .then((res) => res.json())
          .then((data) => setDeleteNotes(data));
      }, [deleteNotes]);
    return [deleteNotes, setDeleteNotes];
};

export default useDeleteNotes;