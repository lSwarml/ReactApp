import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nawbar from "./Components/Nawbar/NawBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wraper">
                <Header/>
                <Nawbar state={props.state.nawBarExept}/>
                <div className="app-wraper-content">
                    <Route path='/profile' render={() => <Profile state={props.state.profileExept}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.messageExept}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
