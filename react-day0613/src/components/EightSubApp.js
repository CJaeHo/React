// import React from "react";
// import '../App.css';


// const EightSubApp = (props) => {

    

//     return (
//         <div>
//             <h3>색상 : <input type='color' 
//                 onChange={(e)=>{
//                     props.color(e.target.value);
//                 }}/></h3>
//             <h3>내용 : <input type='text' 
//                 onChange={(e)=>{
//                     props.message(e.target.value);
//             }}/></h3>
//             <select style={{width:'50px'}}
//                 onChange={(e)=>{
//                     props.photo(e.target.value);
//                 }}>
//                     {
//                         [...new Array(8)].map((a,idx)=>(<option>{`c${idx+1}`}</option>))
//                     }
//             </select>
//         </div>
//     )
// }

// export default EightSubApp;


import React from "react";
import '../App.css';


const EightSubApp = ({color,message,photo}) => {

    const onColor=(e)=>{
        color(e.target.value);
    }
    const onMessage=(e)=>{
        message(e.target.value);
    }
    const onPhoto=(e)=>{
        photo(e.target.value);
    }
    return (
        <div>
            <h3 className = "alert alert-info">EightSubApp 컴포넌트</h3>
            <h3>색상 : <input type='color' 
                onChange={onColor}/></h3>
            <h3>내용 : <input type='text' 
                onChange={onMessage}/></h3>
            <select style={{width:'50px'}}
                onChange={onPhoto}>
            {
                [...new Array(8)].map((a,idx)=>(<option>{`c${idx+1}`}</option>))
            }
            </select>
        </div>
    )
}

export default EightSubApp;