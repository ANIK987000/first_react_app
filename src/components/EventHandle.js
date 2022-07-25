import { useState } from "react";

const EventHandle=()=>{
    const[count,setCount]=useState(0);
    const ClickHandle=()=>{
        setCount(count+1);
        console.log(count);
        

    }
    return(
        <div>
             <button onClick={ClickHandle}>Click</button>
            <p>{count}</p>
        </div>
       
        
    )
}
export default EventHandle;