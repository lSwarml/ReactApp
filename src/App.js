import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Nawbar from "./Components/NawBar";
import Profile from "./Components/Profile";


const App = () => {
    return (
        <div className="grid">
            <Header/>
            <Nawbar/>
            <Profile/>
        </div>
    );
};


export default App;
