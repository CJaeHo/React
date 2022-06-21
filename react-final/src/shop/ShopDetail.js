import React,{useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import '../App.css';
import axios from "axios"
// MUI Dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ShopDetail=()=>{
    
    ////////////////////////////////// MUI Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    ///////////////////////////////
    const SPRING_URL=process.env.REACT_APP_SPRING_URL;
    const navi=useNavigate();
    const {num,idx}=useParams();            // url에 detail/1에서 1을 가져오는건 useParams로
    const [data,setData]=useState('');

    ///////////////// url 등록
    let detailUrl=SPRING_URL+"shop/detail?num="+num;    // 데이터를 가져오는 url
    let photoUrl=SPRING_URL+"save/" 
    let deleteUrl=SPRING_URL+"shop/delete?num="+num;
    ///////////////////////////////

    // 스프링으로부터 num에 해당하는 data 전체 받기
    const onDataReceive=()=>{
        axios.get(detailUrl)
        .then(res=>{
            //console.log(res.data.sangpum);
            setData(res.data);
        }).catch(err=>{             // 에러 자세하게 보고싶을 때 적으면 됨
            alert(err.data);
        })
    }
    ///////////////////////////////

    // 처음 랜더링 시 위의 함수를 호출하기 useEffect 사용
    useEffect(()=>{               // 서버 시작하자마자 db에서 데이타값 가져오는거
        onDataReceive();             
    },[])                       // 요래 ,[] 쓰면 1번 호출된대

    // 삭제시 호출 할 함수
    const onDelete=()=>{            // 코드작성은 백 에서!
        console.log("delete")
        axios.delete(deleteUrl)
        .then(res=>{
            // 삭제 후 목록으로 이동
            navi("/shop/list")
        })
        handleClose();      // 다이얼로그 닫는 함수
    }
    ///////////////////////////////
                                        



    ///////////////////////////////////



    return (
        <div>
            {/* 삭제확인 다이얼로그 */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h4>상품 삭제 확인</h4>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <h5>{data.sangpum} 상품을 삭제하려면 [확인] 버튼을 눌러주세요</h5>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={onDelete} autoFocus>
                    확인
                </Button>
                </DialogActions>
            </Dialog>

            
            <table className="table table-bordered ShopDe">
                <caption><h3>{idx}번 상품 상세보기</h3></caption>
                <tbody>
                    <tr>
                        <td rowSpan='4' className="img_box">
                            <img alt="" src={photoUrl+data.photo} />
                        </td>
                        <td className="aaa">
                            <h3>상품명 : {data.sangpum}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className="aaa" >
                        <h3>수량 : {data.su}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className="aaa" >
                        <h3>가격 : {data.dan}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className="aaa" >
                            <h4>입고일 : {data.ipgoday}</h4>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2' align="center" className="detailbtn">
                            <button type="button" className="btn btn-info"
                                onClick={()=>{
                                    navi("/shop/list")
                                }}>목록</button>
                            <button type="button" className="btn btn-danger"
                                onClick={handleClickOpen}>삭제</button>
                            <button type="button" className="btn btn-warning"
                                onClick={()=>{
                                    navi(`/shop/updateform/${num}/${idx}`);
                                }}>수정</button>
                            <button type="button" className="btn btn-success"
                                onClick={()=>{
                                    navi("/shop/form")
                                }}>추가</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopDetail;