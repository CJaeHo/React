import axios from 'axios';
import React,{useState} from 'react';
import '../App.css';

const LoginForm = () => {

    // 입력값 넣을 변수설정 (db에 있는 컬럼과 같은 이름으로)
    const [id,setId]=useState('');
    const [pass,setPass]=useState('');

    // submit시 호출될 함수
    const onSubmit=(e)=>{
        e.preventDefault();         // 기본이벤트 무효화 시켜주는 거

        const url=process.env.REACT_APP_SPRING_URL+"member/login";
        axios.post(url,{id,pass})
        .then(res=>{
            if(res.data===0){
                alert("아이디 또는 비밀번호가 맞지 않습니다")
            }else{
                localStorage.loginOk="yes";                         // 로컬스토리지는 내가 지우지 않는이상 계속 브라우저에 남아있음
                localStorage.myId=id;
                window.location.reload();   // 새로고침하는 방법
            }
        })
    }


    




    return (
        <div>
            <form onSubmit={onSubmit}>
                <table className='table table-bordered' style={{width:'300px'}}>
                    <caption><b><h3>회원 로그인</h3></b></caption>
                    <tbody>
                        <tr>
                            <td width={200}>
                                <input type='text' placeholder='아이디' style={{width:'180px'}} className="form-control" required
                                    onChange={(e)=>{
                                        setId(e.target.value);
                                    }}/>
                            </td>
                            <td rowSpan={2}>
                                <button type='submit' className='btn btn-info btn-sm' style={{width:'80px',height:'80px'}} required
                                    onClick={onSubmit}>로그인</button>
                            </td>
                        </tr>
                        <tr>
                            <td width={200}>
                                <input type='password' placeholder='비밀번호' style={{width:'180px'}} className="form-control" required
                                    onChange={(e)=>{
                                        setPass(e.target.value);
                                    }}/>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    );
};

export default LoginForm;