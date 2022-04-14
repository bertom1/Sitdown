import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import { EventCard } from './components/Event Card';
// import Dogs from "./pages/Dogs";
// import Cats from "./pages/Cats";
// import Sheeps from "./pages/Sheeps";
// import Goats from "./pages/Goats";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <EventCard />
        {/* <Switch> */}
        {/* <Route path="/" exact component={Home} />
          <Route path="/" component={Cats} />
          <Route path="/" component={Sheeps} />
          <Route path="/goats" component={Goats} /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
