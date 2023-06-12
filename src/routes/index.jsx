import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../Pages/Dashboard";

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Dashboard/> } />
        </Routes>
    )
}
