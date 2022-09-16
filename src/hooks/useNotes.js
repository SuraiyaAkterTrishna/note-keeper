import { useEffect, useState } from 'react';

const useNotes = () => {
    const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://immense-sea-60701.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [notes]);
    return [notes, setNotes];
};

export default useNotes;