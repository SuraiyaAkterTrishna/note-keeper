import { useEffect, useState } from 'react';

const useArchives = () => {
    const [archiveNotes, setArchiveNotes] = useState([]);
    useEffect(() => {
        fetch("https://immense-sea-60701.herokuapp.com/archives")
          .then((res) => res.json())
          .then((data) => setArchiveNotes(data));
      }, [archiveNotes]);
    return [archiveNotes, setArchiveNotes];
};

export default useArchives;