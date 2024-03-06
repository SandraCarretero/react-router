import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import Menu from "./components/menu/Menu";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles/>
			<Menu/>
			<Router/>
		</BrowserRouter>
	);
};

export default App;
