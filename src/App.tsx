import React from "react";
import { mainRoute } from "./Router/MainRoute";
import {RouterProvider  } from "react-router-dom"

const App = ()=>{
    return (
        <div>
            <RouterProvider router= {mainRoute}/>
        </div>
    )
}

export default App;
