import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const Note = ({ note, HandleArchiveNote, HandleDeleteNote }) => {

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => HandleArchiveNote(note._id)}
        />
        <Delete fontSize="small" onClick={() => HandleDeleteNote(note._id)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
