import "./globals.css";
import Action from "./action.js";

const Movies= () =>{
    return( 
        <div className="movie1" >
            <div className="movie_image" >
                <img src="image 1.svg"/>
            </div>
            <div className="movie_details" >
               <h1>movie-name</h1>
               <p>movie-name</p>
               <h2>movie-name</h2>
               <p>movie-name</p>
           </div>
           <div className="movie_action" ><Action/>
           </div>
            
        </div>   
        
    );    
};
export default Movies;
