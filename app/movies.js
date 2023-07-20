import "./globals.css";
import React, {useState} from 'react';
import Rating_count from "./rating_count.js";
import Delete from "./delete.js";
import {m_Data} from'./data.js';

const Movie_raw=({props,onDelete})=>{
    const [count, setCount] =useState(0);
    
    const handleLike=()=>{
        setCount(count+1);
    }
    const handleDislike=()=>{
        setCount(count-1);
    }
    return(
        <div className="movies" >
            <div className="movie_image" >
                <img src={props.picture}/>
            </div>     
            <div className="movie_details">
                <p>{props.id}</p>
                <h1>{props.name}</h1>
                <p>{props.hour}</p>
                <p>{props.description}</p>
                <p>{props.genre}</p>   
            </div>
            <div className="movie_action" > 
                <Rating_count 
                    onLike={handleLike} count={count} onDislike={handleDislike}
                />
                 <div > 
                    <Delete onDelete={onDelete}/>    
                </div>
    
            </div>
        </div>   
    );    
};
export default Movie_raw;
