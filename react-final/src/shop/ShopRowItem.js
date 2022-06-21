import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

const ShopRowItem=({idx,row})=>{

    const navi=useNavigate();

    // 원래는 전역변수 써서 설정을해놔야지만 포트가 바뀌더라도 찾아갈 수 있음
    // 이번에는 그냥 변수에 넣어놓고 사용하겠음
    let photoUrl="http://localhost:9001/save/";


    return (
        <tr>
            <td>{idx+1}</td>
            <td>
                <img alt="" src={photoUrl+row.photo} className="small"/>
                <b style={{fontSize:'2em'}}>{row.sangpum}</b>
            </td>
            <td>
                <button type="button" className="btn btn-info btn-sm"
                    onClick={()=>{
                        navi(`/shop/detail/${row.num}/${idx+1}`)
                    }}>detail</button>
            </td>
        </tr>
    )
}

export default ShopRowItem;