import React,{useState} from "react";
import img1 from '../image/떡볶이.jpg';





const ThirdApp=()=>{
    // 상태관리를 위한 변수 설정
    const [message,setMessage]=useState(['Happy Day']);

    // 이벤트 함수
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            setMessage('');         // message 변수 값 지우기
            e.target.value='';      // 입력값 지우기
        }
    }

    return(
        <div>
            <h2 className="alert alert-info" style={{fontFamily:'Dongle'}}>ThirdApp 입니다</h2>
            <img alt="" src={img1} style={{width:'300px'}}></img>

            <h3 style={{color:'red'}}>{message}</h3>
            <hr/>
            <h4>메세지를 입력해보세요</h4>                                      {/* onChange={()=>{}}  이거는 function 주는 법 */}
            <input type='text' style={{width:'300px', fontSize:'2em'}} defaultValue={message} onChange={(e)=>{
              //  console.log(e.target.value);        // 입력한 값을 보겠다는거
                // message 변수에 입력값 넣기
                setMessage(e.target.value);
            }}
            onKeyUp={handleEnter}/>
        </div>
    )

}

export default ThirdApp;