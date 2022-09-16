import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { reorder } from "../../utils/common-utils";

//components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";
import useNotes from "../../hooks/useNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

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

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Grid
                  container
                  style={{ marginTop: 16 }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes.map((note, index) => (
                    <Draggable
                      key={note._id}
                      draggableId={note._id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          item
                        >
                          <Note
                            note={note}
                            HandleArchiveNote={HandleArchiveNote}
                            HandleDeleteNote={HandleDeleteNote}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
