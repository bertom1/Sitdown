import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import { EventCard } from "./components/Event Card";
import BottomNav from "./components/BottomNav";
import AddPage from "./pages/AddPage";
import { EventContainer } from "./components/Event Container";
import { EventProvider, InviteProvider } from "./Context/EventContext";
import { LoadScript } from "@react-google-maps/api";
// import Dogs from "./pages/Dogs";
// import Cats from "./pages/Cats";
// import Sheeps from "./pages/Sheeps";
// import Goats from "./pages/Goats";
const e = {
  id: 0,
  title: `Random Event`,
  date: '00/00/0000',
  time: '00:00',
  guests: [{name: 'John', items:['Avocado', 'forks']}, {name: 'Dylan', items: ['banana', 'something random']}],
  items: ['cups', 'plates', 'doughnuts'],
  address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
  geolocation:{lat: 38.8977, lng: -77.0365},
  description: `Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ip has been the industry's standard dummy text ever since the 1500s`
}

function App() {
  return (
    <div className="App">
      <LoadScript 
        googleMapsApiKey="secret-API-key"
        libraries={['places']}
        >
      <Router>
        <TopNav />
        <EventProvider >
          <InviteProvider >
            <EventContainer />
          </InviteProvider>
        </EventProvider>
        
        {/* <Switch> */}
        {/* <Route path="/" exact component={Home} />
          <Route path="/" component={Cats} />
          <Route path="/" component={Sheeps} />
          <Route path="/goats" component={Goats} /> */}
        {/* </Switch> */}
        <BottomNav />
      </Router>
      </LoadScript>
    </div>
  );
}

export default App;
