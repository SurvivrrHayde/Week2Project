import { Card } from "@mui/material";

function EmptyMessage() {

  return (
    <Card sx={{minWidth:'300px', margin: '5px', padding: '15px', ':hover': {boxShadow: 9}}}>
      <h3>
        There are no messages!
      </h3>
      <p>Go to "Create Post" and create a message yourself for others to see!</p>
    </Card>
  );
}

export default EmptyMessage;