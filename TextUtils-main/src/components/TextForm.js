import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was Click")
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was Click")
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to Lowercase!","success");
    }
    const handleCrClick=()=>{
        // console.log("Uppercase was Click")
       let newText = text.replace(text, '');
       setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value)
        props.showAlert("Text Changed!","success");
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      // text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!","success");
    }

    const[text, setText] = useState('');
  return (
    <>
      <div className="container">
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              onChange={handleOnChange}
              value={text}
              style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'
              
              }}
            />
          </div>
          <button className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
          <button className='btn btn-primary m-3' onClick={handleCrClick}>Clear Text</button>
          <button className='btn btn-primary m-3' onClick={handleLoClick}>Convert To LowerCase</button>
          <button className='btn btn-primary m-3' onClick={handleCopy}>Copy</button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{(0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)).toFixed(2)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
