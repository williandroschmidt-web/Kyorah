import "./Sidebar.css";

import {
  FiPlus,
  FiMessageSquare,
  FiSettings,
  FiX,
} from "react-icons/fi";

import { useChat } from "../../contexts/ChatContext";

export default function Sidebar({ isOpen, onClose }) {
  const {
    chats,
    activeChat,
    setActiveChat,
    newChat,
  } = useChat();

  function handleNewChat() {
    newChat();

    if (window.innerWidth <= 768) {
      onClose?.();
    }
  }

  function handleSelectChat(index) {
    setActiveChat(index);

    if (window.innerWidth <= 768) {
      onClose?.();
    }
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Botão fechar (Mobile) */}
      <button
  className="close-sidebar"
  onClick={onClose}
  aria-label="Fechar menu"
>
  <FiX />
</button>

      <div>
        <div className="sidebar-logo">
          <div className="logo-box">
            <img
              src="/favicon.png"
              alt="Kyorah"
            />
          </div>

          <div>
            <h1>Kyorah</h1>
            <span>OMNIA | MediaLab</span>
          </div>
        </div>

        <button
          className="new-chat"
          onClick={handleNewChat}
        >
          <FiPlus />
          <span>Nova conversa</span>
        </button>

        <div className="chat-history">
          {chats.map((chat, index) => (
            <button
              key={chat.id}
              className={`history ${
                activeChat === index ? "active" : ""
              }`}
              onClick={() => handleSelectChat(index)}
            >
              <FiMessageSquare />

              <span>{chat.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="settings">
          <FiSettings />
          <span>Configurações</span>
        </button>
      </div>
    </aside>
  );
}