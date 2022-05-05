import { Component } from "react";
import "./Chatbox.css";

class Chat extends Component {

  closeForm(){
    return false;
  }
  
  render(){
    return (
      <div className="w-full h-full overflow-scroll">
        <h2>Event Chat</h2>
        <p>
          Click on the button at the bottom of this page to open the chat form.
        </p>

        <h2>Chat Messages</h2>

        <div className="container">
          <img
            src="/w3images/bandmember.jpg"
            alt="Avatar"
            className="chatImage"
            // style="width:100%;"
          />
          <p>Hello. How are you today?</p>
          <span className="time-right">11:00</span>
        </div>

        <div className="container darker">
          <img
            src="/w3images/avatar_g2.jpg"
            alt="Avatar"
            className="right chatImage"
            // style="width:100%;"
          />
          <p>Hey! I'm fine. Thanks for asking!</p>
          <span className="time-left">11:01</span>
        </div>

        <div className="container">
          <img
            src="/w3images/bandmember.jpg"
            alt="Avatar"
            className="chatImage"
            // style="width:100%;"
          />
          <p>Sweet! So, what do you wanna do today?</p>
          <span className="time-right">11:02</span>
        </div>

        <div className="container darker">
          <img
            src="/w3images/avatar_g2.jpg"
            alt="Avatar"
            className="right chatImage"

            // style="width:100%;"
          />
          <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
          <span className="time-left">11:05</span>
        </div>

        <button className="open-button" onClick={console.log("hello")}>
          Chat
        </button>

        <div className="chat-popup" id="myForm">
          <form action="/action_page.php" className="form-container">
            <h1>Chat</h1>

            <label for="msg">
              <b>Message</b>
            </label>
            <textarea
              placeholder="Type message.."
              name="msg"
              required
            ></textarea>

            <button type="submit" className="btn">
              Send
            </button>
            <button type="button" className="btn cancel" onClick={this.closeForm}>
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }   
  
}

export default Chat;