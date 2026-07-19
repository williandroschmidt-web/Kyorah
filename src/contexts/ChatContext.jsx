import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [chats, setChats] = useState(() => {
  const saved = localStorage.getItem("kyorah_chats");

  if (saved) {
    return JSON.parse(saved);
  }

  return [
    {
      id: crypto.randomUUID(),
      title: "Nova conversa",
      messages: [],
    },
  ];
});

  const [activeChat, setActiveChat] = useState(0);
  useEffect(() => {
  localStorage.setItem(
    "kyorah_chats",
    JSON.stringify(chats)
  );
}, [chats]);

  const messages = chats[activeChat]?.messages || [];

  function updateMessages(newMessages) {
    setChats((prev) =>
      prev.map((chat, index) =>
        index === activeChat
          ? {
              ...chat,
              messages: newMessages,
            }
          : chat
      )
    );
  }

  function newChat() {
    const chat = {
      id: crypto.randomUUID(),
      title: "Nova conversa",
      messages: [],
    };

    setChats((prev) => [chat, ...prev]);
    setActiveChat(0);
  }

  async function sendMessage(text) {
    if (!text.trim() || loading) return;

    const userMessage = {
      role: "user",
      text,
    };

    const updatedMessages = [...messages, userMessage];

    setChats((prev) =>
  prev.map((chat, index) => {
    if (index !== activeChat) return chat;

    return {
      ...chat,
      title:
        chat.messages.length === 0
          ? text.length > 35
            ? text.slice(0, 35) + "..."
            : text
          : chat.title,
      messages: updatedMessages,
    };
  })
);

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!res.ok) {
        throw new Error("Erro na API");
      }

      const reader = res.body.getReader();
const decoder = new TextDecoder();

let assistantText = "";

const assistantMessage = {
  role: "assistant",
  text: "",
};

updateMessages([
  ...updatedMessages,
  assistantMessage,
]);

while (true) {
  const { done, value } = await reader.read();

  if (done) break;

  const chunk = decoder.decode(value);

  assistantText += chunk;

  updateMessages([
    ...updatedMessages,
    {
      role: "assistant",
      text: assistantText,
    },
  ]);
}

    } catch (err) {
      console.error(err);

      updateMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: "Erro ao conectar com a Kyorah.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        chats,
        activeChat,
        setActiveChat,
        newChat,
        messages,
        loading,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}