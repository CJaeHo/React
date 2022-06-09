import React,{Component} from "react";
import './MyStyle.css';
import img1 from '../image/떡볶이.jpg';

// 클래스형



let helloElement=<h1>Hello Element!!</h1>
export default class SecondApp extends Component{                     
    //상속 import React랑 같이 ,{Component}이렇게 가져오면 extends뒤에 Component만 써도되고 
    //    React만 가져오면 React.Component라고 적어줘야 함

        // 생성자
        constructor(){
            super();
            console.log("생성자 호출");
        }

        render(){
            const imgStyle={
                border:'3px solid pink',
                borderRadius:'100px',
                width:'130px'
            }

            return (
                <div>
                    <h1 style={{fontFamily:'Dongle', fontSize:'3em'}}>SeconApp 입니다</h1>
                    <img alt="" src={img1} style={imgStyle}></img>

                    {helloElement}{helloElement}{helloElement}              {/* 전역변수 출력방법 */}
                </div>
            )
        }
}