import React, {useState} from 'react';

                                                                                                                                                                                                                    
const Rating=()=>{
    const [count, setCount] =useState(0);
    
    const handleLike=()=>{
        setCount(count+1);
    }
    
    const handleDisike=()=>{
        setCount(count-1);
    }

    return(
        <>
            <div className="rating_count">
                <div className="like">
                    <button onClick={handleLike}>
                        <img src="Icon - Like.svg" /> </button>
                </div>
                <div className="count"> {count} </div>
                <div className="dislike">
                    <button onClick={handleDisike}>
                        <img src="Icon - Like (1).svg" /> </button>
                </div>
            </div>    
        </>
    );      
};
export default Rating;
