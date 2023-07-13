import React from "react";
import Header from "../Block/Header";
import {Outlet} from "react-router-dom";
import Hero from "../Static/Hero"
import AfterHero from "./AfterHero";
import Selling from "./Selling";
import AfterSelling from "./AfterSelling";
import OneMan from "./OneMan";
import AnotherOne from "./AnotherOne";
import Trust from "./Trust";
import Teacher from "./Teacher";
import Footer from "../Block/Footer";

const Layout = ()=>{
    return (
        <div>
        <Header/>
        <Hero/>
        <AfterHero/>
        <Selling/>
        <AfterSelling/>
        <OneMan/>
        <AnotherOne/>
        <Trust/>
        <Teacher/>
        <Footer/>
        <Outlet/>
        </div>
    )
}

export default Layout;

