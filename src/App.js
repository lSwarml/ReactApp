import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nawbar from "./Components/Nawbar/NawBar";
import Profile from "./Components/Profile/Profile";

const App = () => {
    return (
        <div className="grid">
            <Header/>
            <Nawbar />
            <Profile />
        </div>
    );
};


export default App;
