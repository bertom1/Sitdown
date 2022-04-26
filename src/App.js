import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import AddPage from "./pages/AddPage";
import { EventContainer } from "./components/Event Container";
import { EventProvider, InviteProvider } from "./Context/EventContext";
import { UserProvider } from "./Context/UserContext";
import { LoadScript } from "@react-google-maps/api";
import { EventPage } from "./components/Event Page";
import { InvitePage } from './components/Invite Page'
import { ProfilePage } from "./components/Profile Page";
import { Chatbox } from "./components/Chatbox/Chatbox.html";
// import Dogs from "./pages/Dogs";
// import Cats from "./pages/Cats";
// import Sheeps from "./pages/Sheeps";
// import Goats from "./pages/Goats";
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

function App() {
  const scriptLibraries = ["places"]
  return (
    <div className="App">
    
      <LoadScript googleMapsApiKey="AIzaSyAuFzEe4kobTk82fqLz3Qz3UyIPhfKX1nk" libraries={scriptLibraries}>
      <UserProvider >
        <EventProvider>
          <InviteProvider>
            <BrowserRouter>
              <TopNav />
              <Routes>

                <Route path="/" element={<EventContainer />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/invite/:id" element={<InvitePage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/chat" element={<Chatbox/>}/>
                <Route path="/profile" element={<></>} />
              </Routes>


              <BottomNav />
            </BrowserRouter>
          </InviteProvider>
        </EventProvider>
                                             
      </UserProvider>

      </LoadScript>
    </div>
  );
}

export default App;