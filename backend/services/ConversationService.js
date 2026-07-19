import supabase from "../lib/supabase.js";

export async function createConversation(userId = null) {
  const { data, error } = await supabase
    .from("conversations")
    .insert({
      user_id: userId,
      title: "Nova conversa",
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function saveMessage(conversationId, role, content) {
  const { error } = await supabase
    .from("messages")
    .insert({
      conversation_id: conversationId,
      role,
      content,
    });

  if (error) throw error;
}

export async function getMessages(conversationId) {
  const { data, error } = await supabase
    .from("messages")
    .select("role, content")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
}