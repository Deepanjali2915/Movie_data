
"use client"

import React,{useState} from "react"
import Header from "./header.js";
import Movies from "./movies.js";
import Add_movies from "./add_movies.js";
import Footer from "./footer.js";
import {Data} from './data.js';


const Page =() => {
    const [moviesdata,setMoviesdata]=useState(Data);
    return (
        <>
            <Header/>
            {
            moviesdata.map((item)=>
                <Movies
                key={item.id}
                props={item}
                /> 
            )}
            
            <Add_movies/>
            <Footer/>
        </>
    );
};
export default Page;                



