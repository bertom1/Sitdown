import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import { EventContainer } from "./components/Event Container";
import { EventProvider, InviteProvider } from "./Context/EventContext";
import { UserProvider } from "./Context/UserContext";
import { LoadScript } from "@react-google-maps/api";
import { EventPage } from "./components/Event Page";
import { InvitePage } from './components/Invite Page'
import { ProfilePage } from "./components/Profile Page";
import { AddPage } from "./components/Add Page";
import { Chat } from "./components/Chat Page";
import { Conversation } from "./components/Chat Page";
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css';
const e = {
  id: 0,
  title: `Random Event`,
  date: "00/00/0000",
  time: "00:00",
  guests: [
    { name: "John", items: ["Avocado", "forks"] },
    { name: "Dylan", items: ["banana", "something random"] },
  ],
  items: ["cups", "plates", "doughnuts"],
  address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
  geolocation: { lat: 38.8977, lng: -77.0365 },
  description: `Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ip has been the industry's standard dummy text ever since the 1500s`,
};

const scriptLibraries = ["places"]
function App() {
  return (
    <div className="App h-screen">

      <LoadScript googleMapsApiKey="AIzaSyAQzP0U-AipYSrDUlPxgV8uwQJvEQj1Paw" libraries={scriptLibraries}>
        <UserProvider >
          <EventProvider>
            <InviteProvider>
              <BrowserRouter basename='/sitdown'>
                <TopNav />
                <Routes>
                  <Route path="/home" element={<EventContainer />} />
                  <Route path="/event/:id" element={<EventPage />} />
                  <Route path="/invite/:id" element={<InvitePage />} />
                  <Route path="/add" element={<AddPage />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/conversation" element={<Conversation />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path='/' element={<Navigate replace to='/home' />} />
                </Routes>
                <BottomNav />
              </BrowserRouter>
            </InviteProvider>
          </EventProvider>
        </UserProvider>
      </LoadScript>
      <NotificationContainer />
    </div>
  );
}

export default App;
