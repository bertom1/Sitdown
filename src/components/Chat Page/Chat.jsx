import { react, useState, useParams } from "react";
import { useNavigate } from "react-router-dom";
// import "./Chatbox.css";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Search,
  ConversationList,
  Conversation,
  Avatar,
  AvatarGroup,
} from "@chatscope/chat-ui-kit-react";
import zoeIco from "../../image/person.jpeg";
import lillyIco from "../../image/person.jpeg";
import joeIco from "../../image/person5.jpeg";
import emilyIco from "../../image/person2.jpeg";
import kaiIco from "../../image/person3.jpeg";
import akaneIco from "../../image/person.jpeg";
import eliotIco from "../../image/person.jpeg";
import patrikIco from "../../image/person.jpeg";

const Chat = () => {
  
  const nav = useNavigate();
  return (
    <>
      <div className="overflow-auto text-left">
        <Search placeholder="Search..." className="bg-pink" />

        <Conversation
          name="Rachel's Birthday"
          lastSenderName="Lilly"
          info="Can't wait!"
          onClick={() => {
            nav(`/conversation`, { replace: true });
          }}
          // className="w-full"
          unreadDot
        >
          <AvatarGroup size="sm">
            <Avatar src={lillyIco} name="Lilly" />
            <Avatar src={joeIco} name="Joe" />
            <Avatar src={emilyIco} name="Emily" />
            <Avatar src={kaiIco} name="Kai" />
          </AvatarGroup>
        </Conversation>

        <Conversation
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
        >
          <Avatar src={joeIco} name="Joe" status="dnd" />
        </Conversation>

        <Conversation
          name="Emily"
          lastSenderName="Emily"
          info="Yes i can do it for you"
        >
          <Avatar src={emilyIco} name="Emily" status="available" />
        </Conversation>

        <Conversation
          name="Kai"
          lastSenderName="Kai"
          info="Yes i can do it for you"
        >
          <Avatar src={kaiIco} name="Kai" status="unavailable" />
        </Conversation>

        <Conversation
          name="Akane"
          lastSenderName="Akane"
          info="Yes i can do it for you"
        >
          <Avatar src={akaneIco} name="Akane" status="eager" />
        </Conversation>

        <Conversation
          name="Eliot"
          lastSenderName="Eliot"
          info="Yes i can do it for you"
        >
          <Avatar src={eliotIco} name="Eliot" status="away" />
        </Conversation>

        <Conversation
          name="Zoe"
          lastSenderName="Zoe"
          info="Yes i can do it for you"
        >
          <Avatar src={zoeIco} name="Zoe" status="dnd" />
        </Conversation>
      </div>
    </>
  );
};

export default Chat;
