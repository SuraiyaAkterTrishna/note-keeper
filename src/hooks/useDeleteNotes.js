import { useEffect, useState } from 'react';

const useDeleteNotes = () => {
    const [deleteNotes, setDeleteNotes] = useState([]);
    useEffect(() => {
        fetch("https://immense-sea-60701.herokuapp.com/trash")
          .then((res) => res.json())
          .then((data) => setDeleteNotes(data));
      }, [deleteNotes]);
    return [deleteNotes, setDeleteNotes];
};

export default useDeleteNotes;