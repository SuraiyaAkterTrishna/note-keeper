import { useEffect, useState } from 'react';

const useNotes = () => {
    const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [notes]);
    return [notes, setNotes];
};

export default useNotes;