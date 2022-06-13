import React,{useRef, useState} from "react";
import SixSubApp from "./SixSubApp";
import SixSubApp2 from "./SixSubApp2";
import SixSubApp3 from "./SixSubApp3";

const SixApp = () => {
    
    const [number,setNumber]=useState(10);

    // 증가하는 이벤트 함수
    const numberIncre=()=>{
        setNumber(number+1);
    }
    // 감소하는 이벤트 함수
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return (
        <div>
            <h3 className = "alert alert-warning">SixApp 컴포넌트 - 부모, 자식간 컴포넌트 통신</h3>
            <SixSubApp name="캔디" age="23" />
            <SixSubApp name="테리우스" age="31" />
            <SixSubApp name="마징가" age="29" />
            <br/><br/>
            <SixSubApp2 flower="장미꽃" price="12000" linecolor="red"/>
            <SixSubApp2 flower="안개꽃" price="26000" linecolor="green"/>
            <SixSubApp2 flower="국화꽃" price="17000" linecolor="pink"/>
            <br/><br/>
            <div className="number">{number}</div>
            <SixSubApp3 incre={numberIncre} decre={numberDecre}/>      
                 {/* incre={numberIncre} decre={numberDecre} 여기서 보면... 위에 함수를 numberIncre numberDecre로 줬는데 변수가 incre decre잖아
                    변수 명은 달라도 상관없어 같아도 되고 달라도됨.. 이변수 안에 들어오는 변수명만 같으면 됨 ㅇㅋ?*/}
        </div>
    )
}

export default SixApp;