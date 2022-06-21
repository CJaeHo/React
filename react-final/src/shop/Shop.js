import React, {useState,useEffect} from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import ShopRowItem from "./ShopRowItem";


const Shop=()=>{

    const navi=useNavigate();

    // 백엔드에서 받아올 리스트 데이타 변수 설정하기
    const [shopList,setShopList]=useState([]);
   // console.log(shopList);
    // 데이타를 가져오는 함수 설정하기
    const list=()=>{
        let url="http://localhost:9001/shop/list";

        axios.get(url)      // res에는 getmapping의 list가 들어있음
        .then(res=>{
            // 스프링으로부터 받아온 List를 shopList에 넣기
            setShopList(res.data);
            console.log("len="+res.data.length);
        })
    }

    // 처음 랜더링시 딱 한번 데이타 가져오기
    useEffect(()=>{
        //console.log("list");        // 그래야 시작하자마자 shopList에 값을 넣음
        // 값이 2번출력되면 src의 index.js에서 </React.StrictMode> 에를 2개다 주석처리해주면 됨
        
        list();
    },[]);

    return (
        <div>
            <button type="button" className="btn btn-info" style={{width:'120px'}}
                onClick={()=>{
                    navi("/shop/form")      // 상품 폼 페이지로 이동하는거
                }}>상품등록</button>
            <hr/>
            <table className="table table-bordered" style={{width:'500px'}}>
                <thead>
                    <tr style={{backgroundColor:'#c2c2c2'}}>
                        <th width='50'>번호</th>
                        <th width='350'>상품명</th>
                        <th>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {           // row는 그냥 유니크값으로 쓰는거 삭제 추가 등등
                        shopList.map((row,idx)=>(
                            <ShopRowItem key={idx} idx={idx} row={row}/>  // ShopRowItem에 값넘기기
                        ))
                        
                    }
                    
                </tbody>

            </table>
        </div>
    )
}

export default Shop;