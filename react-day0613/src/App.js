import React,{useState} from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';
import NineApp from './components/NineApp';


function App() {
    const [idx, setIdx] = useState(8);

    const selectComponents = (e) => {
      console.log(e.target.value);
      setIdx(Number(e.target.value));
    }
  return (
    <div>
      <div className='numlabel'>
        <label>
          <input type='radio' name='comp' defaultValue='1' 
            onClick={selectComponents}/>OneApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='2' 
            onClick={selectComponents}/>TwoApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='3'
            onClick={selectComponents}/>ThreeApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='4'
            onClick={selectComponents}/>FourApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='5'
            onClick={selectComponents}/>FiveApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='6' 
            onClick={selectComponents}/>SixApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='7'
            onClick={selectComponents}/>SevenApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='8' defaultChecked
            onClick={selectComponents}/>EightApp
        </label>
        <label>
          <input type='radio' name='comp' defaultValue='9'
            onClick={selectComponents}/>NineApp
        </label>
      </div>
      <hr />
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:idx===7?<SevenApp/>:idx===8?<EightApp/>:<NineApp/>}
    </div>
  );
}

export default App;
