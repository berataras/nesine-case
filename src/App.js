import React, {useState} from "react";
import "./styles/global.css"
import "./styles/app.css"

import {Basket, TableList} from "./components";
import ThemeContext from "./context/ThemeContext";

function App () {
    const [value, setValue] = useState([]);
    return (
       <ThemeContext.Provider value={[value, setValue]}>
           <div className="container">
               <div className="content">
                   <TableList />
                   <Basket />
               </div>
           </div>
       </ThemeContext.Provider>
    )
}

export default App;