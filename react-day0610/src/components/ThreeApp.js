import React, {useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import Battery80SharpIcon from '@mui/icons-material/Battery80Sharp';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ThreeApp=()=>{

    const [names,setNames]=useState(['최재호','박소연','가나다','마바사','아자차']);
    const [irum,setIrum]=useState('');

    // 추가 버튼 이벤트 설정하기.. 배열에 추가는 concat()을 이용하면 됨
    const btnInsert=()=>{
        if(irum===''){
            alert("이름을 입력 후 추가해주세욘!");
            return;
        }
        setNames(names.concat(irum));           // 배열에 irum 데이터 추가하기!
        setIrum('');
    }

    // 입력 KeyUp 이벤트 설정하기
    const txtEnter=(e)=>{
        if(e.key==='Enter'){
            btnInsert();            // 엔터를 치면 btnInsert가 실행되면서 추가되게끔
            e.target.value='';
        }
    }

    // 입력 change 이벤트 설정하기
    const txtInput=(e)=>{
        setIrum(e.target.value);
    }

    // 더블클릭 삭제 이벤트 설정하기
    const dataRemove=(index)=>{
        // console.log(index);
        // 방법1
        // setNames([
        //     ...names.slice(0,index),
        //     ...names.slice(index+1,names.length)
        // ]);          // index번지만 잘라내서 남은걸 다시 배열에 넣는거

        //방법2
        setNames(names.filter((item,i)=>i!==index));        // index번지만 걸러내는거
    }
    return(
        <div>
            <Alert severity="info" style={{fontSize:'20px'}}>ThreeApp 컴포넌트라고여!!&nbsp;<Battery80SharpIcon/></Alert>
            <div style={{marginLeft:'100px'}}>                      {/* value={irum}을 추가해서 추가버튼 누르고나서 value값 지워지게 */}
                <TextField id="outlined-basic" label="이름입력" variant="outlined" size="small" value={irum} style={{width:'150px'}}
                    onChange={txtInput}
                    onKeyUp={txtEnter}/>
                <Button variant="outlined" size='medium' color="info" style={{marginLeft:'5px'}} onClick={btnInsert}>
                    추가
                </Button>
                <br/>
                <h5>이름을 더블클릭하면 삭제됩니당</h5>
                <ul>
                    {
                        names.map((na,index)=>(<li className="data" key={index} onDoubleClick={()=>dataRemove(index)}>{na}</li>))
                    }
                </ul>
            
            </div>


        </div>  
        
    )
}

export default ThreeApp;