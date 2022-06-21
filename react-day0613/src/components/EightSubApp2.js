import React, { useState } from "react";
import '../App.css';


const EightSubApp2 = ({addColor}) => {
    
    const [color,setColor]=useState('#ccccff');

    // const addColorEvent=(e)=>{  
    //     addColor(color); 
    //     setColor(e.target.value);  
    // }
    const addColorEvent=()=>{  
        addColor(color);   
    }
    return (
        <div style={{width:'500px'}}>
            <h3 className = "alert alert-warning">EightSubApp2 컴포넌트</h3>
            
            <div className="form-inline">
                <h4>색상 선택 : </h4>
                <input type='color' defaultValue='#ccccff' step={{width:'100px'}}
                    onChange={(e)=>{
                        setColor(e.target.value)
                }}/>
                <button type="button" className="btn btn-warning btn-sm" 
                    onClick={addColorEvent}>색상추가</button>
            </div>



        </div>
    )
}

export default EightSubApp2;