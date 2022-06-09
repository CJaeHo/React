import React, { useState } from "react";




const FiveApp=()=>{

    const [photo,setPhoto]=useState('../image2/01.png');
    
    /*
    const changePhoto=(e)=>{
        setPhoto(e.target.value);
    해놓고
    밑에 onCLick={changePhoto}
    이렇게만 적어주면 변수를 사용해서도 됨!!
    }

    */

    return(
        <div>
            <h2 className="alert alert-danger">FiveApp 컴포넌트인데!!!</h2>
            
            <div style={{fontSize:'20px'}}>
                <b>인형선택 : </b>
                <label>
                <input type='radio' name="photo" value='../image2/01.png' defaultChecked
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형1
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/02.png' 
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형2
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/03.png'
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형3
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/04.png'
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형4
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/05.png'
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형5
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/06.png'
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형6
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/07.png'
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형7
                </label>
                &emsp;
                <label>
                <input type='radio' name="photo" value='../image2/08.png'
                    onClick={(e)=>{
                        setPhoto(e.target.value)
                    }}/>인형8
                </label>
                &emsp;
            </div>
            <img alt="쉬마려워..............................." src={photo}/>
            
        </div>

    )
}

export default FiveApp;