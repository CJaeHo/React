import React,{useState} from "react";
import '../App.css';
import axios from "axios";              // 백엔드랑 통신할 때 axios 필수!!
import {useNavigate} from 'react-router-dom';

const ShopUpdateForm=()=>{

    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState('');
    const [dan,setDan]=useState('');

    const navi=useNavigate();

    // url 등록
    let uploadUrl="http://localhost:9001/shop/upload";
    let photoUrl="http://localhost:9001/save/";
    let insertUrl="http://localhost:9001/shop/insert";

    // file change 시 호출 이벤트
    const uploadImage=(e)=>{
        const uploadFile=e.target.files[0];
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);      
        // 여기 "uploadFiled" 이거 이름은 sts에서 ShopController파일에 
        // @RequestParam MultipartFile uploadFile 여기 변수 이름이랑 같아야해!!!!!!!!!!!!!
        
        axios({
            method:'post',
            url:uploadUrl,          // 이거 백엔드 URL이야
            data:imageFile,
            headers:{'Content-Type':'mutipart/form-data'}
        }).then(res=>{              // response 줄인거
            setPhoto(res.data);     // 백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }

    // 추가하는 함수 이벤트 설정하기
    const onInsert=()=>{            // dto에 있는 이름이랑 같아야됨.. {key,value} 형식이지만 key와 value의 이름이 같으면 value는 생략가능
        axios.post(insertUrl,{sangpum,su,dan})
        .then(res=>{
            // insert 성공 후에 처리할 코드들이 들어오는 자리
            // 목록으로 이동
            navi("/shop/list");
        })
    }
    // 브라우저에서 상품등록해보고 db확인하기.. 상품목록으로 가지고, 값이 들어가있으면 성공!!

    return (
        <div>
            <table className="table table-bordered" style={{width:'600px',fontSize:'20px'}}>
                <caption><b>상품 등록</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'gray'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'250px'}}
                                onChange={(e)=>{
                                    setSangpum(e.target.value);
                                }}></input>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'gray'}}>사진</th>
                        <td width='300'>
                            <input type='file' className="form-control" style={{width:'250px'}}
                                onChange={uploadImage}></input>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'gray'}}>수량</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'120px'}}
                                onChange={(e)=>{
                                    setSu(e.target.value);
                                }}></input>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'gray'}}>가격</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'150px'}}
                                onChange={(e)=>{
                                    setDan(e.target.value);
                                }}></input>
                        </td>
                        <th>{dan}</th>
                    </tr>
                    <tr style={{height:'150px'}}>
                        <td colSpan='2'>
                            <img alt="" src={photoUrl+photo} style={{width:'120px',height:'120px', marginLeft:'130px'}}/>
                        </td>
                        <td>
                            <button type="button" className="btn btn-success" 
                                style={{width:'120px',height:'120px', marginLeft:'30px'}}
                                onClick={onInsert}>
                                    상품등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopUpdateForm;