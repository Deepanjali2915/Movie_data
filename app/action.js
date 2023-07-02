import Like from "./like.js";
import Dislike from "./dislike.js";
import Rating_count from "./rating_count.js";
import Delete from "./delete.js";

const Action =() => {
    return (
        <>
           <Like/>
           <Rating_count/>
           <Dislike/>
           <Delete/>
        </>
    );
};
export default Action;                

