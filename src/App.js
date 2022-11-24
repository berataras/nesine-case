import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles/global.css"
import "./styles/app.css"

import {Basket, List} from "./components";
import ThemeContext from "./context/ThemeContext";

function App () {
    const [value, setValue] = useState([]);
    return (
       <ThemeContext.Provider value={[value, setValue]}>
           <div className="container">
               <div className="content">
                   <List />
                   <Basket />
               </div>
           </div>
       </ThemeContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));