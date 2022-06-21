import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";              // 백엔드랑 통신할 때 axios 필수!!
import {useNavigate,useParams} from 'react-router-dom';

const ShopForm=()=>{

    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState('');
    const [dan,setDan]=useState('');
    const {num,idx}=useParams();
    // const [data,setData]=useState('');

    const navi=useNavigate();

    // url 등록
    let uploadUrl="http://localhost:9001/shop/upload";
    let photoUrl="http://localhost:9001/save/";
    let updateUrl="http://localhost:9001/shop/update";
    let detailUrl="http://localhost:9001/shop/detail?num="+num+"&idx="+idx;    // 데이터를 가져오는 url,,, dto 가져와야지


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

    const onDataReceive=()=>{       // detail에서 데이타값 가져오는거
        axios.get(detailUrl)
        .then(res=>{
            // console.log(res.data.sangpum);
            setSangpum(res.data.sangpum);
            setPhoto(res.data.photo);
            setSu(res.data.su);
            setDan(res.data.dan);
        })
    }

    // 처음 랜더링 시 위의 함수 호출
    useEffect(()=>{               // 서버 시작하자마자 db에서 데이타값 가져오는거
        onDataReceive();             
    },[])  

    // 추가하는 함수 이벤트 설정하기
    const update=()=>{            // dto에 있는 이름이랑 같아야됨.. {key,value} 형식이지만 key와 value의 이름이 같으면 value는 생략가능
        axios.post(updateUrl,{num,sangpum,su,dan})
        .then(res=>{
            // update 성공 후에 처리할 코드들이 들어오는 자리
            // 상세보기로 이동
            navi(`/shop/detail/${num}/${idx}`);
        })
    }
    // 브라우저에서 상품수정해보고 db확인하기.. 상품목록으로 가지고, 값이 들어가있으면 성공!!

    return (
        <div>
            <table className="table table-bordered" style={{width:'600px',fontSize:'20px'}}>
                <caption><b>상품 수정 (상품번호 : {idx})</b></caption>      {/* num이 나오면 useParams로 잘 가져온거임 */}
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'gray'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'250px'}} defaultValue={sangpum}
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
                            <input type='text' className="form-control" style={{width:'120px'}} defaultValue={su}
                                onChange={(e)=>{
                                    setSu(e.target.value);
                                }}></input>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'gray'}}>가격</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'150px'}} defaultValue={dan}
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
                            <button type="button" className="btn btn-info" 
                                style={{width:'120px',height:'120px', marginLeft:'30px'}}
                                onClick={update}>
                                    상품수정</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopForm;