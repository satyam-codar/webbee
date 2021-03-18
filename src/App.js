/** @format */

import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Profile from "./components/Dashboard/Profile";
import UserProfile from "./components/Dashboard/profile2";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import BatchTen from "./components/TopNavbar/AlumuniNetwork/BatchTen";
import BatchEleven from "./components/TopNavbar/AlumuniNetwork/BatchEleven";
import BatchTwelve from "./components/TopNavbar/AlumuniNetwork/BatchTwelve";
import Home from "./components/Home/home";
import NotFound from "./components/All/Notfound";
// import LazyLoading from "./components/All/LazyLoading";
import Donate from "./components/TopNavbar/Donate";
import Magazine from "./components/TopNavbar/Magazine";
import Navbar from "./components/TopNavbar/Navbar";
import Footer from "./components/Home/Footer2";
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
					<Route path="/navbar" component={TopNavbar} />
					<Route path="/aboutus" component={AboutUs} />
					<Route path="/donate" component={Donate} />
					<Route path="/magazine" component={Magazine} />
					<Route path="/YourProfile/:id" component={UserProfile} />
					<Route path="/profile/:id" component={Profile} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/alumni/2010" component={BatchTen} />
					<Route path="/alumni/2011" component={BatchEleven} />
					<Route path="/alumni/2012" component={BatchTwelve} />
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
