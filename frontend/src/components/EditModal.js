import db from "../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./Backdrop.css";

function EditModal(props) {
    const textFieldRefUser = useRef(null);
    const textFieldRefMessage = useRef(null);

  // Remove a response

  function onDelete() {
    deleteDoc(doc(db, "messages", props.id));
    props.onClick();
  }

  // Get the response

  getDoc(doc(db, "messages", props.id)) // get the collection
    .then((message) => {
      textFieldRefUser.current.value = message.data().user;
      textFieldRefMessage.current.value = message.data().message;
    });

  //Edit the response

  function editData() {
    updateDoc(doc(db, "messages", props.id), {
      user: textFieldRefUser.current.value,
      message: textFieldRefMessage.current.value,
    });
    props.onClick();
  }

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