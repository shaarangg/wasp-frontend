import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Components/Login';
import Blog from './Components/Blog';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/blogs" component={Blog}/>
      </div>
    </Router>
  );
}

export default App;
