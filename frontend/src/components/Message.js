import { Card, Button } from "@mui/material";
import EditModal from "./EditModal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Message(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    props.updateMessages();
  }

  function closeHandler() {
    setModalIsOpen(false);
    props.updateMessages();
  }

  return (
    <Card
      sx={{
        minWidth: "300px",
        margin: "5px",
        padding: "15px",
        ":hover": { boxShadow: 9 },
      }}
    >
      <h3>{props.user} says:</h3>
      <p>{props.message}</p>
      <Button variant="contained" onClick={deleteHandler}>
        Edit Event
      </Button>
      {modalIsOpen && <EditModal onClick={closeHandler} id={props.id} />}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
    </Card>
  );
}

export default Message;
