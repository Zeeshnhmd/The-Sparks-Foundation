import Home from './components/home/Home';
import Header from './components/header/Header';
import Users from './components/users/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<Router className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
