//rfc
import React, {useState} from 'react'
export default function TextForm(props) {
    const[text, setText]=useState("");
    const toHandle=(event)=>
        {
            setText(event.target.value);
        }
    const toUpper=()=>
       {
        let newCo=text.toUpperCase();
            setText(newCo);
            props.showAlert("Text Converted to UpperCase","success");
       }
       const toLower=()=>
        {
            let newT=text.toLowerCase();
            setText(newT);
            props.showAlert("Text Converted to Lower","success");
        }
        const toClear=()=>
            {
                let newC='';
                setText(newC);
            }
        const toCopy=()=>
            {
                var text=document.getElementById("myBox");
                text.select();
                navigator.clipboard.writeText(text.value);
            }
        const toRemove=()=>
            {
                let textNw=text.split(/[ ]+/);
                setText(textNw.join(" "));
            }
    // settext("Hello");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white': props.mode2==='warning'?'black':'white'}}>
<div className="mb-3">
    <h3>{props.heading}</h3>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={toHandle} style={{backgroundColor:props.mode==='dark'?'#040850':'white',color:props.mode==='dark'?'white' : props.mode2==='warning'?'black':'black'}}></textarea>
</div>
<button className={`btn btn-${props.mode2 === 'primary' ? 'primary' : props.mode2 === 'success' ? 'success' : props.mode2 === 'warning' ? 'warning' : props.mode2 === 'danger'?'danger':'primary'} mx-2`} onClick={toLower}>To lower case</button>
<button className={`btn btn-${props.mode2 === 'primary' ? 'primary' : props.mode2 === 'success' ? 'success' : props.mode2 === 'warning' ? 'warning' : props.mode2 === 'danger'?'danger':'primary'} mx-2`} onClick={toUpper}>To upper case</button>
<button className={`btn btn-${props.mode2 === 'primary' ? 'primary' : props.mode2 === 'success' ? 'success' : props.mode2 === 'warning' ? 'warning' : props.mode2 === 'danger'?'danger':'primary'} mx-2`} onClick={toClear}>Clear</button>
<button className={`btn btn-${props.mode2 === 'primary' ? 'primary' : props.mode2 === 'success' ? 'success' : props.mode2 === 'warning' ? 'warning' : props.mode2 === 'danger'?'danger':'primary'} mx-2`} onClick={toCopy}>Copy</button>
<button className={`btn btn-${props.mode2 === 'primary' ? 'primary' : props.mode2 === 'success' ? 'success' : props.mode2 === 'warning' ? 'warning' : props.mode2 === 'danger'?'danger':'primary'} mx-2`} onClick={toRemove}>Remove extra Spaces</button>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text for preview"}</p>
    </div>
    </>
  )
}
