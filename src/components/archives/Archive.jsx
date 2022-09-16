import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';


const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Archive = ({ archive, unArchiveNote, deleteNote }) => {
    return (
        <StyledCard>
                <CardContent>
                    <Typography>{archive.heading}</Typography>
                    <Typography>{archive.text}</Typography>
                </CardContent>
                <CardActions>
                    <Unarchive 
                        fontSize="small" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={() => unArchiveNote(archive._id)}
                    />
                    <Delete 
                        fontSize="small"
                        onClick={() => deleteNote(archive._id)}
                    />
                </CardActions>
        </StyledCard>
    )
}

export default Archive;