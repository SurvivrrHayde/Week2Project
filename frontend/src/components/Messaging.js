import Message from "./Message";
import EmptyMessage from "./EmptyMessage";
import { collection, getDocs, } from "firebase/firestore";
import {useState, useEffect} from "react"
import db from "../firebase";

function Messaging() {

    const [messages, setMessages] = useState([]);

    const [nothing, setNothing] = useState(false);

    useEffect(() => {
        const messages = [];
        getDocs(collection(db, "messages")).then((allMessages) => {
          allMessages.forEach((message) =>
            messages.push({ id: message.id, ...message.data() })
          );
          if (messages.length === 0) {
            setNothing(true);
          }
          setMessages(messages);
        });
      }, []);

      function updateMessages() {
        const messages = [];
        getDocs(collection(db, "messages")).then((allMessages) => {
          allMessages.forEach((message) =>
            messages.push({ id: message.id, ...message.data() })
          );
          if (messages.length === 0) {
            setNothing(true);
          }
          setMessages(messages);
        });
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
  