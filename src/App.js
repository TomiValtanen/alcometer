import {useState} from 'react'
import './App.css';

function App() {
const[weight, setWeight]=useState(0);
const[bottles,setBottles]=useState(1);
const[time, setTime]=useState(1);
const[gender, setGender]=useState("male");
const[result,setResult]=useState(0);

function calculating(){
  let litres= bottles * 0.33;
  let grams= litres * 8 * 4.5;
  let burning= weight / 10;
  let gramsLeft=grams - (burning * time);
  let alcoholLevel=0;

  gender==="male" ? alcoholLevel= gramsLeft / (weight * 0.7) : alcoholLevel= gramsLeft / (weight * 0.6);
  if(alcoholLevel < 0) alcoholLevel=0;
  setResult(alcoholLevel);
}


  return (
<form>
  <h3>Calculating alcohol blood level</h3>
  <div>
    <label>Weight</label>
    <input type="number" value={weight} onChange={e=>setWeight(e.target.value)}></input>
  </div>

  <div>
    <label>Bottles</label>
    <select name="bottles" value={bottles} onChange={e=>setBottles(e.target.value)}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
    </select>
  </div>

  <div>
    <label>Time</label>
    <select name="time" value={time} onChange={e=>setTime(e.target.value)}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
    </select>
  </div>

  <div>
    <label>Gender</label>
    <input type="radio" name="gender" value="male" onChange={e=>setGender(e.target.value)} defaultChecked></input><label>Male</label>
    <input type="radio" name="gender" value="female" onChange={e=>setGender(e.target.value)}></input><label>Female</label>
  </div>
  <div className="resultDiv">
    <output>{result.toFixed(2)}</output>
  </div>
  <button type="button" onClick={calculating}>Calculate</button>
</form>
  );
}

export default App;
