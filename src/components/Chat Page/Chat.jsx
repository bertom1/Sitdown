import { react, useState, useParams } from "react";
import { useNavigate } from "react-router-dom";
import "./chat.scss";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Search,
  Conversation,
  Avatar,
  AvatarGroup,
} from "@chatscope/chat-ui-kit-react";
import zoeIco from "../../image/person7.jpeg";
import lillyIco from "../../image/person.jpeg";
import joeIco from "../../image/person2.jpeg";
import emilyIco from "../../image/person5.jpeg";
import kaiIco from "../../image/person6.jpeg";
import akaneIco from "../../image/person3.jpeg";
import eliotIco from "../../image/person4.jpeg";

const Chat = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="overflow-auto text-left">
        <Search placeholder="Search..." />

        <Conversation
          name="Rachel's Birthday"
          lastSenderName="Joe"
          info="imho :P"
          onClick={() => {
            nav(`/conversation`, { replace: true });
          }}
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
          name="Holloween Bash"
          lastSenderName="Emily"
          info="me and Matt are coming as gangsters"
        >
          <AvatarGroup size="sm">
            <Avatar src={eliotIco} name="Lilly" />
            <Avatar src={joeIco} name="Joe" />
            <Avatar src={akaneIco} name="Kai" />
            <Avatar src={emilyIco} name="Emily" />
          </AvatarGroup>
        </Conversation>

        <Conversation name="Kai" lastSenderName="Kai" info="of course!">
          <Avatar src={kaiIco} name="Kai" status="unavailable" />
        </Conversation>

        <Conversation name="Akane" lastSenderName="Akane" info="can't wait!">
          <Avatar src={akaneIco} name="Akane" status="eager" />
        </Conversation>

        <Conversation name="Eliot" lastSenderName="Eliot" info="gimme a sec">
          <Avatar src={eliotIco} name="Eliot" status="away" />
        </Conversation>

        <Conversation name="Zoe" lastSenderName="Zoe" info="lol totally np">
          <Avatar src={zoeIco} name="Zoe" status="dnd" />
        </Conversation>
      </div>
    </>
  );
};

export default Chat;
