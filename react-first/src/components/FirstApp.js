import React from "react";
import './MyStyle.css';
import img12 from '../image/12.jpg';
import ricecake from '../image/떡볶이.jpg'

// 함수형



const FirstApp=()=>{
    // style을 변수에 지정              {/*css에서 말고 여기서 바로 주고싶을 때는 이렇게*/}
    const styleImg1={
        width:'200px',
        border:'5px inset gray',
        marginLeft:'100px',
        marginTop:'20px'
    }

    return(
        // 반드시 하나의 태그로 감싸줘야 함
        <div>
            {/* h2에 클래스 적용 */}
            <h2 className="line" style={{fontFamily:'Open Sans'}}>First App Component!!!</h2>
            <div style={{fontSize:'25px', color:'green', marginLeft:'100px', fontFamily:'Black Han Sans'}}>            {/*스타일직접줄떄 {{여기에 스타일값}}*/}
                안녕하세요. 반가워요!!!!!!!
            </div>
            <img src={img12} style={styleImg1} alt=''/>                {/*변수를 이용해서 스타일을 줄 때 style={여기에변수}*/}
            <img src={ricecake} style={{width:'200px', border:'2px solid black', borderRadius:'20px', marginLeft:'30px'}} alt='배고파'/>   {/*인라인 스타일주는 방법*/}
            <br/>
            <h3>public 영역의 이미지는 직접 호출이 가능하다!</h3>
            <img src="../s1.JPG" alt=""/>


        </div>
    )
}

export default FirstApp;