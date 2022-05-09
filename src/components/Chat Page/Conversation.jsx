import { useState,  } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContainer, ConversationHeader, Avatar, InfoButton, MessageList,
MessageSeparator, Message, AvatarGroup, TypingIndicator, MessageInput } from "@chatscope/chat-ui-kit-react";
import zoeIco from "../../image/person.jpeg"
import lillyIco from "../../image/person.jpeg";
import joeIco from "../../image/person2.jpeg";
import emilyIco from "../../image/person5.jpeg";
import kaiIco from "../../image/person6.jpeg";
import akaneIco from "../../image/person3.jpeg";
import eliotIco from "../../image/person.jpeg";
import "./chat.scss"

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
           message: "Votes for vanilla or chocolate cake...",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "single",
         }}
       >
         <Avatar src={kaiIco} name="Zoe" />
       </Message>
       
         <Message
           model={{
             message: "Chocolate!",
             sentTime: "15 mins ago",
             sender: "Patrik",
             direction: "outgoing",
             position: "single",
           }}
           className="hello"
         />
   
       <Message
         model={{
           message: "CHOCOLATE",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
        
         }}
       >
         <Avatar src={akaneIco} name="Zoe" />
        </Message>
       <Message
         model={{
           message: "Vanilla rules!",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "normal",
         }}
         
       >
        <Avatar src={emilyIco} name="Zoe" />
        </Message>
       <Message
         model={{
           message: "Chocolate all the way",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "normal",
         }}>
          <Avatar src={joeIco} name="Zoe" />
       </Message>
       <Message
         model={{
           message: "Vanilla my friend",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "normal",
         }}
       >
         <Avatar src={eliotIco} name="Zoe" />
       </Message>
       <Message
         model={{
           message: "I think the birthday gal likes chocolate",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "normal",
         }}
       />
       <Message
         model={{
           message: "so...",
           sentTime: "15 mins ago",
           sender: "Patrik",
           direction: "outgoing",
           position: "normal",
         }}
       />

       <Message
         model={{
           message: "she has great taste",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
         
         }}
         avatarSpacer
       />
       <Message
         model={{
           message: "imho :P",
           sentTime: "15 mins ago",
           sender: "Zoe",
           direction: "incoming",
           position: "normal",
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