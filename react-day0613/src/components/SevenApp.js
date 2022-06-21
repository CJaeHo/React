import React,{ useState } from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";

const SevenApp = () => {

    const [board,setBoard]=useState([
        {
            name:'최재호',
            photo:'c1',
            blood:'O',
            today:new Date()
        },
        {
            name:'김희민',
            photo:'c2',
            blood:'O',
            today:new Date()
        },
        {
            name:'김서윤',
            photo:'c3',
            blood:'AB',
            today:new Date()
        },
        {
            name:'정일웅',
            photo:'c4',
            blood:'B',
            today:new Date()
        },
        {
            name:'김현지',
            photo:'c5',
            blood:'A',
            today:new Date()
        },
        {
            name:'단시연',
            photo:'c6',
            blood:'A',
            today:new Date()
        }
    ]);

    
    

    // 데이타 추가하는 함수 이벤트 설정하기
    const dataSave=(data)=>{        // 데이터를 한번에 받기
        setBoard(board.concat({
            /*  한번에 안받으면 이렇게 따로따로 받아줘야함
            name:data.name,
            photo:data.photo,
            blood:data.blood
            */
            ...data,                // 펼침연산자 쓰면 name에 name, photo에 photo, 혈액형에 혈액형이 들어감
            today:new Date()            // 날짜는 받아오는게 아니니깐 따로 적어줘
        }));
    }

    const removeList=(index)=>{
        setBoard(board.filter((item,i)=>i!==index));        // index번지만 걸러내는거
    }

    return (
        <div>
            <h3 className = "alert alert-danger">SevenApp 컴포넌트</h3>
            <WriteForm onSave={dataSave}/>      {/* dataSave 이벤트 설정한 함수를 onSave라는 변수에 담아서 전달하는거 */}
            
            <table className="table table-bordered" style={{width:'500px'}}>
                <caption><b>Board 배열 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:'orange'}}>
                        <th width='100'>이름</th>
                        <th width='110'>사진</th>
                        <th width='70'>혈액형</th>
                        <th width='100'>날짜</th>
                        <th width='60'>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       board.map((row,index)=>(<RowItemApp row={row} key={index} idx={index} removeList={removeList}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SevenApp;