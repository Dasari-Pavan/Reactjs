import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return(
    <div className="header">
        <div className="Logo-container">
            <img
                className="logo"
                src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
};

const Restaurantcard=()=>{
   return(
    <div className="res-card">
        <img 
        className="res-logo"
        alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/0/19279320/60e414a5bac9e2c0cce19321dd838b71.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"/>
     <h3>Meghana Chicken Biryani</h3>
     <h4 id="bir">Biryani Andhra</h4>
     <h4 id="rupees">₹300 for one</h4>
    <div className="starrate">
    <h4 id="rating">4.5 ⭐</h4>
    <h4>30 minutes</h4>
    </div>
    </div>
   );
};


const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search
                <div className="Restaurant-Container">
                   <Restaurantcard/>   
                   <Restaurantcard/> 
                   <Restaurantcard/> 
                   <Restaurantcard/>
                   <Restaurantcard/>
                   <Restaurantcard/>
                   <Restaurantcard/>
                   <Restaurantcard/>
                   
                </div>
            </div>
        </div>
    );
};



const AppLayout=()=>{
    return(
    <div className="app">
        <Header/>
        <Body></Body>
    </div>
);
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);