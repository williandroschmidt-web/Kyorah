import "./Message.css";
import MarkdownRenderer from "../MarkdownRenderer";

export default function Message({ message }) {
  const isAssistant = message.role === "assistant";

  return (
    <div className={`message ${message.role}`}>

      {isAssistant && (
        <div className="assistant-header">
          <div className="assistant-avatar">
            <img src="/favicon.png" alt="Kyorah" />
          </div>

          <span>Kyorah</span>
        </div>
      )}

      <div className="message-content">
        {isAssistant ? (
          <MarkdownRenderer>
            {message.text}
          </MarkdownRenderer>
        ) : (
          message.text
        )}
      </div>

    </div>
  );
}