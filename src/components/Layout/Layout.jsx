import { useState } from "react";
import "./Layout.css";

import Sidebar from "../Sidebar/Sidebar";
import SidebarToggle from "../Sidebar/SidebarToggle";
import Home from "../Home/Home";
import Chat from "../Chat/Chat";
import Composer from "../Composer/Composer";

import { useChat } from "../../contexts/ChatContext";

export default function Layout() {
  const { messages, loading } = useChat();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {!sidebarOpen && (
  <SidebarToggle
    onClick={() => setSidebarOpen(true)}
  />
)}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="main">

        {messages.length === 0 ? (
          <Home />
        ) : (
          <div className="chat-area">
            <Chat />
          </div>
        )}

        <Composer />

      </main>

    </div>
  );
}