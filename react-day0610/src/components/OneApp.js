import React, {useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
const OneApp=()=>{
    // 배열 변수 선언하기
    const names=['최재호','정일웅','김희민','김서윤','김현지','단시연'];
    // 반복문을 변수에 저장 후 출력해도 됨!
    const nameList=names.map((name)=>(<li>{name}</li>));    // li가 리턴된대....???뭔말이야ㅑ..아아 li가 리턴되면서 반복된다고 ㅋ 한줄이면 return 생략가능ㅋ

    // 색상을 배열로 주기
const colors=['red','green','orange','gray','pink','magenta','cyan','blue','yellow'];

    return(
        <div>
            <Alert severity="error" style={{fontSize:'20px'}}>OneApp 컴포넌트라고여!!&nbsp;<AddCircleOutlineSharpIcon style={{fontSize:'25px'}}/></Alert>
            <span class="material-symbols-outlined">close</span>
            <span class="material-symbols-outlined">arrow_forward</span>
        
            <div>
                <h3>map 반복문 연습</h3>
                <ol>{nameList}</ol>         {/* 반복문이 저장된 변수 사용 */}
                <hr/>
                <ul>
                    {
                        names.map((name,index)=>(<b>{index} : {name}<br/></b>))         /* 배열 변수 사용 */
                    }
                </ul>
                <hr/>
                {
                    colors.map((color)=>(<div className="box" style={{backgroundColor:color}}/>))
                }
            </div>
        </div>
        
    )
}

export default OneApp;