import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import trashDelete from '../../hooks/trashDelete';
import useDeleteNotes from '../../hooks/useDeleteNotes';

//components
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

    const [deleteNotes] = useDeleteNotes([]);
    const restoreNote = (id) => {
        const updatedNotes = deleteNotes.find((data) => data._id === id);
    console.log(id);
    // send to notes database
    fetch("https://immense-sea-60701.herokuapp.com/notes", {
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
    trashDelete(id);
    }

    const removeNote = (id) => {
      // delete data from trash section
      trashDelete(id);
    }

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        deleteNotes.map(deleteNote => (
                            <Grid  key={deleteNote._id} item>
                                <DeleteNote key={deleteNote._id} deleteNote={deleteNote} restoreNote={restoreNote} removeNote={removeNote} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default DeleteNotes;