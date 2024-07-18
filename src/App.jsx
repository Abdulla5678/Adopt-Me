import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Link } from "react-router-dom";

const App = ()=> {
    return(
        <BrowserRouter>
            <header><Link to="/">Adopt Me!</Link></header>
            <Routes>
                <Route path="/" element={<SearchParams/>}/>
                <Route path="/Details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)

export default App;