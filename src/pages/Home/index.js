import React from 'react';
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import App from "../../App"

export default function Home() {
  return (
    <Router>
        <div className="div1">
            <h1 className="teste">DOUG TA CODANDO</h1>
            <Link to="/App"> BOTAO </Link>
        </div>

        <Switch>
            <Route path="/App">
                <App/>
            </Route> 
        </Switch>
    </Router>
  );
}

