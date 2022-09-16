import { useEffect, useState } from 'react';

const useArchives = () => {
    const [archiveNotes, setArchiveNotes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/archives")
          .then((res) => res.json())
          .then((data) => setArchiveNotes(data));
      }, [archiveNotes]);
    return [archiveNotes, setArchiveNotes];
};

export default useArchives;