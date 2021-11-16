import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Nav from "./Components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Route exact path="/login" component={Login} />
				<Route exact path="/blogs" component={Main} />
			</div>
		</Router>
	);
}

export default App;
