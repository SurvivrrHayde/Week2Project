import Message from "./Message";
import EmptyMessage from "./EmptyMessage";
import {useState, useEffect} from "react"

function Messaging() {

    const [messages, setMessages] = useState([]);

    const [nothing, setNothing] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9000/demo/messages")
        .then((res) => res.json())
        .then((text) => {
            if (text.result.length === 0) {
                setNothing(true);
              }
            setMessages(text.result);
        })
        .catch((err) => console.log(err))
      }, []);

      function updateMessages() {
        fetch("http://localhost:9000/demo/messages")
        .then((res) => res.json())
        .then((text) => {
            if (text.result.length === 0) {
                setNothing(true);
              }
            setMessages(text.result);
        })
        .catch((err) => console.log(err))
      }

    return (
      <div>
         {nothing && <EmptyMessage/>}
         {messages.map((message) => (
                  <Message
                    key={message.id}
                    id={message.id}
                    user={message.user}
                    message={message.message}
                    updateMessages={updateMessages}
                  />
                ))}
      </div>
    );
  }
  
  export default Messaging;
  