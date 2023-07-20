
import {m_Data} from "./data.js";
                                                                                                                                                                                                                    
const Rating=({onLike,count,onDislike})=>{
    
    return(
        <>
            <div className="rating_count">
                <div className="like">
                    <button onClick={onLike}>
                        <img src="Icon - Like.svg" /> 
                    </button>
                </div>
                <div className="count"> {count}
                 </div>
                <div className="dislike">
                    <button onClick={onDislike}>
                        <img src="Icon - Like (1).svg" /> </button>
                </div>
            </div>    
        </>
    );      
};
export default Rating;


