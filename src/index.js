import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";




export default function App(){
    return(
        <BrowserRouter basename="/Makaan_project">
        <Routes>
            <Route element={<Layout/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="property" element={<Property/>}/>
            <Route path="pages" element={<Pages/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

const r1=ReactDom.createRoot(document.getElementById('root'))
r1.render(<App/>)