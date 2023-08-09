import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Input from './component/Input';
import Button from './component/Buttun';
function App() {

 const [text ,setText] = useState("")
 const [result ,setResult] = useState("")

 const addToText = (val) =>{
   setText((text) =>[...text, val + " "]);
 }
 const clearText = ()=>{
  setResult("")
  setText("")
 }
 const calResult = ()=>{
  const input = text.join("") //will remove all commas and dot in a string
  setResult(math.evaluate(input))
 }

  // const buttonColor = "brown"
  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <div className='row' >
        <Button symbol="9" handleClick={addToText}/>
        <Button symbol="8" handleClick={addToText}/>
        <Button symbol="7" handleClick={addToText}/>
        <Button symbol="+" color="orange" handleClick={addToText}/>
        </div>
        <div className='row' >
        <Button symbol="6" handleClick={addToText}/>
        <Button symbol="5" handleClick={addToText}/>
        <Button symbol="4" handleClick={addToText}/>
        <Button symbol="-" color="orange" handleClick={addToText}/>
        </div>
        <div className='row' >
        <Button symbol="3" handleClick={addToText}/>
        <Button symbol="2" handleClick={addToText}/>
        <Button symbol="1" handleClick={addToText}/>
        <Button symbol="*" color="orange" handleClick={addToText}/>
        </div>
        <div className='row' >
        <Button symbol="0" handleClick={addToText}/>
        <Button symbol="." color="orange" handleClick={addToText}/>
        <Button symbol="=" color="orange" handleClick={calResult}/>
        <Button symbol="/"color="orange" handleClick={addToText}/>
        </div>
        <Button symbol="Reset" color="red" handleClick={clearText}/>
      </div>
    </div>
  );
}

export default App;
