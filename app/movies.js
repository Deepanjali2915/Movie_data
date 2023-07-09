import "./globals.css";
import Action from "./action.js";
import {Data} from'./data.js';

const Movies=(props)=>{
    return(
        <div className="movies" >
            <div className="movie_image" >
                <img src="image 1.svg"/>
            </div>     
            <div className="movie_details">
                <p>{props.id}</p>
                <h1>{props.name}</h1>
                <p>{props.hour}</p>
                <p>{props.description}</p>
                <p>{props.genre}</p>   
            </div>
            <div className="movie_action" > <Action/>
            </div>
        </div>   
    );    
};


export default Movies;




