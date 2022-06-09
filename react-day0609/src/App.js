import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import { useState } from 'react';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';

function App() {
  
  const [index,setIndex]=useState(6);

  return (
    <div>

      <b style={{marginLeft:'100px', fontSize:'30px', color:'green'}}>컴포넌트 선택 : </b> 
      <select onChange={(e)=>{
        setIndex(Number(e.target.value))
      }} className="select" style={{fontSize:'20px'}}>
        <option value={1}>OneApp</option>
        <option value={2}>TwoApp</option>
        <option value={3}>ThreeApp</option>
        <option value={4}>FourApp</option>
        <option value={5}>FiveApp</option>
        <option value={6}>SixApp</option>
        <option value={7}>SevenApp</option>
        <option value={8}>EightApp</option>
      </select>

      {index===1?<OneApp/>:index===2?<TwoApp/>:index===3?<ThreeApp/>:index===4?<FourApp/>:index===5?<FiveApp/>:index===6?<SixApp/>:index===7?<SevenApp/>:<EightApp/>}
      {/* <OneApp/>
      <hr/>
      <TwoApp/>
      <hr/>
      <ThreeApp/>
      <hr/>
      <FourApp/> */}
    </div>
  );
}

export default App;
