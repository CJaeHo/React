import React from "react";
import '../App.css';
import {useParams} from 'react-router-dom';

const About=()=>{

    const {name}=useParams();
    console.log({name});        // name에 lee라는 값이 들어가있음
    console.log({name}.name)

    return (
        <div>
            <h3>안녕하세요. 제 이름은 {name==null?'비트캠프':name} 입니다</h3>
        </div>
    )
}

export default About;