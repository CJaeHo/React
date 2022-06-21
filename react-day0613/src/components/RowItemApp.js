import React,{} from "react";
import '../App.css';

const RowItemApp = ({row,removeList,idx}) => {

    

    return (
        <tr>
            <td>{row.name}</td>
            <td>
                <img alt="" src={`../image/${row.photo}.png`} style={{width:'100px', border:'1px solid black'}}/></td>
            <td>{row.blood}형</td>
            <td>{row.today.toLocaleDateString('ko-KR')}</td>        
            {/* 날짜를 String으로 변환 해줘야해서 toLocalDateString()를 이용하기 */}
            <td>
                <button type="button" className="btn btn-sm btn-danger" 
                onClick={()=>removeList(idx)}>삭제</button>
            </td>
        </tr>
    )
}

export default RowItemApp;