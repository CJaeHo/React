import React, {useState} from "react";
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';


function App() {

  const [idx,setIdx]=useState(4);

  const selectComponent=(e)=>{
    console.log(e.target.value);
    setIdx(Number(e.target.value));
  }
  return (
    <div>
      
      <div style={{fontSize:'20px'}}>
        <label>
          <input type='radio' name="comp" defaultValue='1' onClick={selectComponent}/>OneApp
        </label>
        &emsp;
        <label>
          <input type='radio' name="comp" defaultValue='2' onClick={selectComponent}/>TwoApp
        </label>
        &emsp;
        <label>
          <input type='radio' name="comp" defaultValue='3'  onClick={selectComponent}/>ThreeApp
        </label>
        &emsp;
        <label>
          <input type='radio' name="comp" defaultValue='4' defaultChecked onClick={selectComponent}/>FourApp
        </label>
        &emsp;
      </div>
      <hr style={{borderColor:'red'}}/>
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:<FourApp/>}
    </div>
  )
}

export default App;
