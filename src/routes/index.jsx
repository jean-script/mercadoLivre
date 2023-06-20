import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../Pages/Dashboard";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Dashboard/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/login" element={ <Login/> } />
        </Routes>
    )
}
