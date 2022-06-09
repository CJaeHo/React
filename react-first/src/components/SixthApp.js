import React,{useState} from "react";
import './MyStyle.css';



const SixthApp=()=>{

    const [num,setNum]=useState(0);

    return(

        <div>
            <div className="Number">
                <h3 style={{position:'relative', left:'85px', top:'50px',fontSize:'3em'}}>{num}</h3>
            </div>

            <div className="updown">
                <button type="button" className="btn btn-info"
                    onClick={()=>{
                        // setNum(Number((num)+1));
                        setNum(num+1)
                    }}>증가</button>
                <button type="button" className="btn btn-danger" style={{marginLeft:'80px'}}
                onClick={()=>{
                    // setNum(Number((num)-1));
                    setNum(num-1)
                }}>감소</button>
            </div> 
        </div>



    )
}

export default SixthApp;