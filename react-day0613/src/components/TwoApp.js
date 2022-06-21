// import React,{useState} from "react";

// const TwoApp = () => {

//     const [inputs,setInputs]=useState({
//         name:'최재호',
//         addr:'경기도',
//         age:29
//     });

//     const changeData=(e)=>{
//         console.log("name"+e.target.name);          // 값을 입력할 때마다 console 창에 호출됨
//         console.log("vaule:"+e.target.value);       // 값을 입력할 때마다 console 창에 호출됨


//         // name, value 값 얻기.. 두개다 한번에 받고싶을 때 쓰는 방식임
//         const {name,value}=e.target;
//         // 변경
//         setInputs({
//             ...inputs,      
//             // 펼침연산자를 사용하면 기존의 멤버들의 값은 그대로 있고 바꾸려고하는 멤버만 바뀌게 됨
//             [name]:value    // 펼칭연산자가 없으면 바뀌는 멤버만 호출됨
//         })
//     }

//     return (
//         <div>
//             <h3 className = "alert alert-danger">TwoApp 컴포넌트-state를 객체로</h3>
//             <h3>이름 : <input type='text' name="name" defaultValue={inputs.name}
//                 onChange={changeData}/></h3>
//             <h3>이름 : <input type='text' name="addr" defaultValue={inputs.addr}
//                 onChange={changeData}/></h3>
//             <h3>이름 : <input type='text' name="age" defaultValue={inputs.age}
//                 onChange={changeData}/></h3>

//             <hr/>
//             <h2>이름 : {inputs.name},{inputs['name']}</h2>
//             <h2>주소 : {inputs.addr},{inputs['addr']}</h2>          {/* 같은 값을 출력함 */}
//             <h2>나이 : {inputs.age},{inputs['age']}</h2>
//         </div>
//     )
// }

// export default TwoApp;

import React,{useState} from "react";

const TwoApp=()=>{

    const [inputs,setInputs]=useState({
        name: '최재호',
        addr:'경기도',
        age:29
    });


    const changeData=(e)=>{
        console.log("name"+e.target.name);
        console.log("value"+e.target.value);
        const {name,value}=e.target;    // 값 2개를 한번에 받을 때
        setInputs({         // 값 변경하기
            ...inputs,
            [name]:value
        })
    }

    return(
        <div>
            <h3 className="alert alert-danger">TwoApp 컴포넌트 - state를 객체로</h3>
            <h3>이름 : <input type='text' name='name' defaultValue={inputs.name}
                oChange={changeData}/></h3>
            <h3>경기도 : <input type='text' name='addr' defaultValue={inputs.addr}
                oChange={changeData}/></h3>
            <h3>나이 : <input type='text' name='age' defaultValue={inputs.age}
                oChange={changeData}/></h3>
            <hr/>
            <h3>이름 : {inputs.name},{inputs['name']}</h3>
            <h3>주소 : {inputs.addr},{inputs['addr']}</h3>
            <h3>나이 : {inputs.age},{inputs['age']}</h3>
        </div>
    )
}
export default TwoApp;