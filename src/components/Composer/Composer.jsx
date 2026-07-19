import { useEffect, useRef, useState } from "react";
import "./Composer.css";
import { FiArrowUp, FiPaperclip } from "react-icons/fi";
import { useChat } from "../../contexts/ChatContext";

export default function Composer() {
  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  const { sendMessage, loading } = useChat();

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  function handleSend() {
  if (!text.trim() || loading) return;

  sendMessage(text);

  setText("");

  if (textareaRef.current) {
    textareaRef.current.style.height = "auto";
  }
}

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="composer-wrapper">
      <div className="composer">

        <button className="icon-button">
          <FiPaperclip />
        </button>

        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          placeholder={
  loading
    ? "A Kyorah está pensando..."
    : "O que vamos criar hoje?"
}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
  className={`send-button ${loading ? "loading" : ""}`}
  onClick={handleSend}
  disabled={!text.trim() || loading}
>
  {loading ? (
    <div className="button-spinner" />
  ) : (
    <FiArrowUp />
  )}
</button>

      </div>
    </div>
  );
}