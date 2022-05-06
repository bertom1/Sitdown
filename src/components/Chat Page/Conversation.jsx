import { useState,  } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContainer, ConversationHeader, Avatar, InfoButton, MessageList,
MessageSeparator, Message, AvatarGroup, TypingIndicator, MessageInput } from "@chatscope/chat-ui-kit-react";
import zoeIco from "../../image/person.jpeg"
import joeIco from "../../image/person4.jpeg";
import emilyIco from "../../image/person2.jpeg";
import kaiIco from "../../image/person3.jpeg";

const Conversation =()=>{
const [messageInputValue, setMessageInputValue] = useState("");
const nav = useNavigate();
 return (
   <ChatContainer>
     <ConversationHeader>
       <ConversationHeader.Back
         onClick={() => nav(`/chat`, { replace: true })}
         title="back to conversations"
       />
       <AvatarGroup
         size="sm"
         style={{
           width: "50px",
           height: "50px",
         }}
       >
         <Avatar src={zoeIco} name="Lilly" />
         <Avatar src={joeIco} name="Joe" />
         <Avatar src={emilyIco} name="Emily" />
         <Avatar src={kaiIco} name="Kai" />
       </AvatarGroup>
       <ConversationHeader.Content
         userName="Rachel's Birthday"
         info="10/11/2022 @ 7:00PM"
       />
       <ConversationHeader.Actions>
         <InfoButton
           onClick={() => {
             nav(`/event/0`, { replace: true });
           }}
         />
       </ConversationHeader.Actions>
     </ConversationHeader>
     <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "single",
           className: "bg-color-pink",
         }}
       >
         <Avatar src={kaiIco} name="Zoe" />
       </Message>

       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "single",
         }}
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "first",
         }}
         avatarSpacer
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "normal",
         }}
         avatarSpacer
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "normal",
         }}
         avatarSpacer
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "last",
         }}
       >
         <Avatar src={zoeIco} name="Zoe" />
       </Message>

       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "first",
           className:"hello",
         }}
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "normal",
         }}
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "normal",
         }}
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "last",
         }}
       />

       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "first",
         }}
         avatarSpacer
       />
       <Message
         model={{
           message: "Hello my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "last",
         }}
       >
         <Avatar src={joeIco} name="Zoe" />
       </Message>
     </MessageList>
     <MessageInput
       placeholder="Type message here"
       value={messageInputValue}
       onChange={(val) => setMessageInputValue(val)}
       onSend={() => setMessageInputValue("")}
     />
   </ChatContainer>
 );
}
export default Conversation;