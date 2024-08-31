import ChatsList from "@/components/chats-list/chats-list";

const chatsData = [
  {
    id: "chat1",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "John Doe",
    status: "online" as const,
    lastMessage: "Hey, how are you?",
    dateOfLastMessage: "2023-10-01T12:34:56Z",
    newMessagesCount: 2,
  },
  {
    id: "chat2",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "Jane Smith",
    status: "offline" as const,
    lastMessage: "Let's catch up soon!",
    dateOfLastMessage: "2023-09-30T15:20:10Z",
    newMessagesCount: 0,
  },
  {
    id: "chat3",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "Alice Johnson",
    status: "online" as const,
    lastMessage: "Are you coming to the party?",
    dateOfLastMessage: "2023-10-01T09:15:30Z",
    newMessagesCount: 5,
  },
  {
    id: "chat4",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "Bob Brown",
    status: "offline" as const,
    lastMessage: "I will send you the details.",
    dateOfLastMessage: "2023-09-29T18:45:00Z",
    newMessagesCount: 1,
  },
] ;

export default function Chats() {
  return <ChatsList data={chatsData} />;
}
