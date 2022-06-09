import React,{useState} from "react";

const SixApp=()=>{

    const [show,setShow]=useState(true);
    const [zzz,setZzz]=useState('hidden');
    const [line,setLine]=useState('solid');
    const [calla,setCalla]=useState("green");

    return(
        <div>
            <h2 className="alert alert-info">SixApp 컴포넌트인데!!!</h2>
            <button type="button" className="btn btn-info" 
                onClick={()=>{
                    setShow(!show);                         // if문 쓰지말고 !show로 센스있게 코딩하자!!
                }}>
                boolean으로 이미지 보였다 안보였다 하기
            </button>
            {show && <img src="../image2/01.png" alt=""/>}
            <br/><br/>
            <button type="button" className="btn btn-warning"
                onClick={()=>{
                    setZzz(zzz==='hidden'?'visible':'hidden');              // if for말고 삼항연산자 쓰는 버릇 들이자!!!
                }}>
                style로 이미지 보였다 안보였다 하기
            </button>

            <img alt="" src="../image2/05.png" style={{visibility:zzz, borderStyle:line, borderColor:calla}} className='greenline'/>
            <select onChange={(e)=>{setLine(e.target.value)}} style={{marginLeft:'20px'}}>
                <option value='solid'>solid</option>
                <option value='inset'>inset</option>
                <option value='groove'>groove</option>
                <option value='dotted'>dotted</option>
                <option value='double'>double</option>
                <option value='dashed'>dashed</option>
                <option value='outset'>outset</option>
            </select>

            <select onChange={(e)=>{setCalla(e.target.value)}}>
                <option value='green'>green</option>
                <option value='red'>red</option>
                <option value='gray'>gray</option>
                <option value='yellow'>yellow</option>
                <option value='blue'>blue</option>
            </select>

        </div>

    )
}

export default SixApp;