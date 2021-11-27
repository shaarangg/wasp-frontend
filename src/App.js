import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Nav from "./Components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Route exact path="/" component={Login} />
				<Route exact path="/blogs" component={Home} />
			</div>
		</Router>
	);
}

export default App;
