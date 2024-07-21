import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: Infinity,
            cachedTime:Infinity
        }
    }
})

const App = ()=> {
    return(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <header><Link to="/">Adopt Me!</Link></header>
                <Routes>
                    <Route path="/" element={<SearchParams/>}/>
                    <Route path="/Details/:id" element={<Details/>}/>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)

export default App;