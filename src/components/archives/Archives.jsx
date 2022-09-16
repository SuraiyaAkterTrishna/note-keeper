import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

//components
import Archive from './Archive';
import useArchives from '../../hooks/useArchives';
import archiveDelete from '../../hooks/archiveDelete';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const [archiveNotes] = useArchives([]);

    const unArchiveNote = (id) => {
      const updatedNotes = archiveNotes.find((data) => data._id === id);
      console.log(id);
      // send to notes database
      fetch("http://localhost:5000/notes", {
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
      archiveDelete(id);
    }
    
    const deleteNote = (id) => {
      const updatedNotes = archiveNotes.find((data) => data._id === id);
      console.log(id);
      // send to trash database
      fetch("http://localhost:5000/trash", {
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
        archiveDelete(id);
    }

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid  key={archive._id} item>
                                <Archive key={archive._id} archive={archive} unArchiveNote={unArchiveNote} deleteNote={deleteNote} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Archives;