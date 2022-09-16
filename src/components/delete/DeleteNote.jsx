import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';


const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const DeleteNote = ({ deleteNote, removeNote, restoreNote }) => {
    return (
        <StyledCard>
                <CardContent>
                    <Typography>{deleteNote.heading}</Typography>
                    <Typography>{deleteNote.text}</Typography>
                </CardContent>
                <CardActions>
                    <Delete 
                        fontSize="small" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={() => removeNote(deleteNote._id)}
                    />
                    <Restore 
                        fontSize="small"
                        onClick={() => restoreNote(deleteNote._id)}
                    />
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;