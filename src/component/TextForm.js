import React, {useState} from 'react'

export default function TextForm(props) {
    const[ Text , setText] = useState("Enter Your Text Hear");
    const onhit = ()=>{
        let new_text = Text.toUpperCase();
        setText(new_text);
    }
    const onhit2 = (event)=>{
        setText(event.target.value);
    }
    const onhitl = (event)=>{
        let new_text = Text.toLowerCase();
        setText(new_text);
    }
    const ClearText = (event)=>{
        let new_text = '';
        setText(new_text);
    }
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
    <textarea className="form-control" value={Text} onChange={onhit2}  id="exampleFormControlTextarea1" rows="7"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={onhit}>Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={onhitl}>Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={ClearText}>Clear</button>
    <div className="container">
        <p>{Text.split(" ").length} words {Text.length} Character</p>
    </div>
    </>
  )
}
