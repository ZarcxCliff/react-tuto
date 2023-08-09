import './Input.css'

function Input({result,text}) {
  return (
    <div className="input-wrapper">
       <div className="text">
            <h2>{text}</h2>
        </div>
        <div className="result">
            <h1>{result}</h1>
        </div>
    </div>
  )
}

export default Input