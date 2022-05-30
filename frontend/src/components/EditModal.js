import { useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./Backdrop.css";

function EditModal(props) {
    const textFieldRefUser = useRef(null);
    const textFieldRefMessage = useRef(null);

  // Remove a response

  function onDelete() {
     fetch("http://localhost:9000/demo/delete?id=" + props.id, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      }).then(() => props.onClick())
  }

  // Get the response

  fetch("http://localhost:9000/demo/get?id="+props.id)
        .then((res) => res.json())
        .then((text) => {
            textFieldRefUser.current.value = text.user;
            textFieldRefMessage.current.value = text.message;
        })
        .catch((err) => console.log(err))

  //Edit the response

  function editData() {
    const change = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ id: props.id, user: textFieldRefUser.current.value, message: textFieldRefMessage.current.value})
    };
    fetch("http://localhost:9000/demo/edit", change)
    .then(props.onClick())
  };

  return (
    <div className="modal">
      <Typography variant='h5'>Edit/Remove MinoMessage</Typography>
      <TextField sx={{margin: '10px'}} label='Username:' InputLabelProps={{shrink:true}} inputRef={textFieldRefUser} />
        <br></br>
        <TextField sx={{margin: '10px'}} label='Message:' InputLabelProps={{shrink:true}} inputRef={textFieldRefMessage} />
        <br></br>
        <Button sx={{margin:'10px'}} variant='contained' color='error' className="btn btn--alt" onClick={onDelete}>
          Delete
        </Button>
        <Button sx={{margin:'10px'}} variant='contained' color='success' className="btn btn--altC" onClick={editData}>
          Save Edits
        </Button>
    </div>
  );
}

export default EditModal;