import { Box, Grid } from "@mui/material";

//components
import Form from "./Form";
import Note from "./Note";
import useNotes from "../../hooks/useNotes";

const Notes = () => {
  const [notes, setNotes] = useNotes([]);

  const HandleArchiveNote = (id) => {
    const updatedNotes = notes.find((data) => data._id === id);
    console.log(id);
    // send to archive database
    fetch("https://immense-sea-60701.herokuapp.com/archives", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedNotes),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          console.log("Note move to archive successfully");
        } else {
          console.log("Failed to move the Note");
        }
      });
    // delete data from notes section
    const url = `https://immense-sea-60701.herokuapp.com/notes/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingNotes = notes.filter(
            (notes) => notes._id !== id
          );
          setNotes(remainingNotes);
        }
      });
  };

  const HandleDeleteNote = (id) => {
    const deleteNote = notes.find((data) => data._id === id);
    console.log(id);
    // send to trash database
    fetch("https://immense-sea-60701.herokuapp.com/trash", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(deleteNote),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          console.log("Note move to archive successfully");
        } else {
          console.log("Failed to move the Note");
        }
      });
    // delete data from notes section
    fetch(`https://immense-sea-60701.herokuapp.com/notes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(id);
      });
  };

  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <Form />
                <Grid
                  container
                  style={{ marginTop: 16 }}
                >
                  {notes.map((note, index) => (
                        <Grid
                        key={note._id}
                          item
                        >
                          <Note
                            key={note._id}
                            note={note}
                            HandleArchiveNote={HandleArchiveNote}
                            HandleDeleteNote={HandleDeleteNote}
                          />
                        </Grid>
                  ))}
                </Grid>
      </Box>
    </Box>
  );
};

export default Notes;
