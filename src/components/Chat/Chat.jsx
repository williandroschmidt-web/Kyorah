import "./Chat.css";

import Message from "../Message/Message";
import ThinkingIndicator from "./ThinkingIndicator";

import { useChat } from "../../contexts/ChatContext";
import { useEffect, useRef } from "react";

export default function Chat() {
  const { messages, loading } = useChat();
  const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);

  return (
    <section className="chat">

      <div className="messages">

        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
          />
        ))}

        
         {loading && <ThinkingIndicator />}
         
      <div ref={messagesEndRef} />

      </div>

    </section>
  );
}