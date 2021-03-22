/** @format */

import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/home";
import NotFound from "./components/All/Notfound";
// import LazyLoading from "./components/All/LazyLoading";
import Navbar from "./components/TopNavbar/Navbar";
import Footer from "./components/Home/Footer";
import Contactusheader from "./components/Home/Contactusheader";
import Menucomponent from "./components/Home/Menucomponent";
import AboutUs from "./components/Home/aboutus";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar/>
				{/* <TopNavbar/> */}
				<Switch>
					
					<Route exact path="/" component={Home} />
					<Route path="/aboutus" component={AboutUs} />
					<Route path="/menu" component={Menucomponent} />
					<Route path="/contactus" component={Contactusheader} />
					{/* <Route path="/lazyloading" component={LazyLoading} /> */}

					<Route component={NotFound} />
				</Switch>
				<Footer/>
				
			</div>
		</BrowserRouter>
	);
}

export default App;
