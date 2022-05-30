import { Typography, Button, TextField } from "@mui/material";
import { useRef } from "react";

function Post() {

    const textFieldRefUser = useRef(null);
    const textFieldRefMessage = useRef(null);
  
    const messageSend = (e) => {
      e.preventDefault();
  
      const newMessage = {
        user: textFieldRefUser.current.value,
        message: textFieldRefMessage.current.value,
      };
      fetch("http://localhost:9000/demo/post", {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newMessage)
      });
  
      textFieldRefUser.current.value = "";
      textFieldRefMessage.current.value = "";
    };

    return (
      <div>
        <Typography variant='h5'>Create a new MinoMessage for other people to see!</Typography>
        <TextField sx={{margin:'10px'}} label='Username:' inputRef={textFieldRefUser} />
        <br></br>
        <TextField sx={{margin:'10px'}} label='Message:' inputRef={textFieldRefMessage} />
        <br></br>
        <Button sx={{margin:'10px'}} variant='contained' onClick={messageSend}>
          Message!
        </Button>
      </div>
    );
  }
  
  export default Post;
  