import React,{useState,useEffect,useRef} from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import MemberList from "./MemberList";

const Member=()=>{

    // 경로 이동 설정
    const navi=useNavigate();

    // db에 있는 컬럼들
    const [data,setData]=useState({         // 이렇게 한번에 data 설정을 onDataChange 함수에 넣어놓고 각각 쓸 수 있음 
        id:'',
        name:'',
        pass:'',
        email:'',
        hp:'',
        addr:''
    });

    // db에 없는 컬럼들
    const [passOk,setPassOk]=useState(false);
    const [email1,setEmail1]=useState('');
    const [email2,setEmail2]=useState('');
    const [btnOk,setBtnOk]=useState(false);


    

    // focus 주기 설정
    const idInput = useRef();


    // submit시 호출될 함수
    const onSave=(e)=> {
        e.preventDefault(); // 기본 이벤트를 무효화 시켜주는 거

        if(!btnOk){
            alert("아이디 중복체크를 해주세요!");
            return;
        }
        if(!passOk){
            alert("비밀번호를 확인해주세요!");
            return;
        }

        // if(!data.emailOk){
        //     alert("이메일 중복 버튼을 눌러주세요")
        //     return;
        // }


        const url=process.env.REACT_APP_SPRING_URL+"member/insert";
        axios.post(url,({
            ...data,email:`${email1}@${email2}`}))
            .then(res=>{
                alert("가입 성공!!");
                navi("/login");
            });
    }

    // 이메일 select 변경시 호출
    const onEmailChange=(e)=> {
        const {value}=e.target;
        if(value==='-'){            // 직접입력 밸류가 -라서 -이면 두번쨰 이메일칸이 공백으로
            setEmail2('');
        }else{
            setEmail2(value);
        }
    }


    // 2번째 pass 입력시 호출
    const onPassChange=(e)=> {
        const {value}=e.target;
        if(value===data.pass){              // 적히는 밸류가 data의 pass 값과 같으면
            setPassOk(true);
        }else{
            setPassOk(false);
        }
    }

    // data 관련 데이타 입력시 호출
    const onDataChange=(e)=> {
        const {name,value}=e.target;

        // 이벤트 발생 name이 pass일 경우에 무조건 passOk는 false밸류이도록
        if(name==='pass') {
            setPassOk(false);
        }

        setData({
            ...data,            // 기존 데이타를 출력하고나서
            [name]:value        // 변경할 데이타 추가
        })
    }


    // 아이디 중복체크 버튼 설정
    const onIdCheck= () => {
        const url=process.env.REACT_APP_SPRING_URL+"member/idcheck?id="+data.id;
        if(data.id!==''){
            axios.get(url)
            .then(res=>{
                
                if(res.data===0){
                    setBtnOk(true);
                    alert("가입 가능한 아이디입니다");
                }else{
                    setBtnOk(false);
                    alert("이미 가입되어있는 아이디 입니다");
                    setData({
                        ...data,
                        id:''
                    })
                }
            })
        }else{
            alert("아이디를 입력 후 중복체크를 해주세요");
            idInput.current.focus();
        }
    }


    // 회원가입 버튼 호출


    // 회원명단 버튼 호출
    const goList=()=>{
        navi("/member/list");
    }


    return(
        <div>
            <form className="form-inline" onSubmit={onSave}>
            <table className="table table-bordered" style={{width:'500px'}}>
            <caption><h3><b>회원가입</b></h3></caption>
            <tbody>
                <tr>
                    <th width='100px'>아이디</th>
                    <td>
                        <input type='text' className='form-control' name='id' style={{width:'130px'}} value={data.id}
                            onChange={onDataChange} ref={idInput} required/>
                        <button type="button" className="btn btn-danger btn-sm" style={{marginLeft:'5px'}}
                            onClick={onIdCheck}>중복체크</button>
                    </td>
                </tr>
                <tr>
                    <th width='100px'>이름</th>
                    <td>
                        <input type='text' className='form-control' name='name' style={{width:'130px'}}
                            onChange={onDataChange} required/>
                    </td>
                </tr>
                <tr>
                    <th width='100px'>비밀번호</th>
                    <td>
                        <input type='password' className='form-control' name='pass' style={{width:'100px'}} 
                            onChange={onDataChange} required/>
                        <input type='password' className='form-control' style={{width:'100px',marginLeft:'5px'}} 
                            onChange={onPassChange} required/>
                        &ensp;
                        <span style={{marginLeft:'5px',color:'red'}}>{passOk?'ok':''}</span>
                    </td>
                </tr>
                <tr>
                    <th width='100px'>이메일</th>
                    <td>
                        <input type='text' className='form-control' name="email1" style={{width:'130px'}} 
                            onChange={(e)=>{
                                setEmail1(e.target.value);
                            }} required/>
                        &nbsp;<b>@</b>&nbsp;
                        <input type='text' className='form-control' name="email2" style={{width:'130px'}} defaultValue={email2} 
                            onChange={(e)=>{
                                setEmail2(e.target.value);
                            }} required/>
                        &emsp;
                        <select className="form-control" onChange={onEmailChange}>
                            <option value='-'>직접입력</option>
                            <option value='naver.com'>네이버</option>
                            <option value='nate.com'>네이트</option>
                            <option value='gmail.com'>구글</option>
                        </select>
                        
                    </td>
                </tr>
                <tr>
                    <th width='100px'>핸드폰</th>
                    <td>
                        <input type='text' className='form-control' name='hp' style={{width:'180px'}} 
                            onChange={onDataChange} required/>
                    </td>
                </tr>
                <tr>
                    <th width='100px'>주소</th>
                    <td>
                        <input type='text' className='form-control' name='addr' style={{width:'350px'}} 
                            onChange={onDataChange} required/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} style={{textAlign:'center'}}>
                        <button type='submit' className="btn btn-info" onClick={onSave}>가입하기</button>
                        <button type='button' className="btn btn-warning" style={{marginLeft:'5px'}} onClick={goList}>회원명단</button>
                    </td>
                </tr>
            </tbody>
            </table>
            </form>
        </div>

    )


}
export default Member;