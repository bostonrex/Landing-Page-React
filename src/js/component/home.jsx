import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return ( 
    <div>
		<NavBar />
    <Jumbotron />
    <Card />
    <Footer />
    </div>
	);
};

export default Home;
