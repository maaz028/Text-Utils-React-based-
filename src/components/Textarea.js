import React, { useState } from 'react'




export default function Textarea(props) {

    const [text,setText] = useState('')

const handleOnChange = (event)=>{
    setText(event.target.value)
}
const convertUppercase =()=>
{
    let textanalyzed = text.toUpperCase()
    setText(textanalyzed)
    props.showAlert('Text changed!',' text converted to upper Case')
}
const convertLowercase =()=>
{
    let textanalyzed = text.toLowerCase()
    setText(textanalyzed)
    props.showAlert('Text changed!',' text converted to Lower Case')
}
const removePunctuation =()=>
{
   
    if (text.length>0)
    {

        let new_text = text.match(/[^_\W]+/g).join(' ')
        setText(new_text)
        props.showAlert('Text changed!',' punctuation removed')
    }
}
   
const removeExtraSpace =()=>
{
    let new_text = '';
    for(let i=0;i<text.length;i++)
    {
        if(i+1 < text.length){
            if (text.charAt(i)===' ' && text.charAt(i+1)===' ')
            {
            continue;
            }
            else
            {
                new_text = new_text+ text.charAt(i)
            }
        }
        setText(new_text)
    }
    props.showAlert('Text changed!',' Extra spaces removed')
}

const clearText = ()=>
{
    setText('')
}


    return (
        <>
        <div className="container my-6">

            <h1 style={props.Style} className='my-6 font h1' >Enter Your Text to be Analyzed.</h1>
            <textarea style={props.TextStyle} required value={text} onChange={handleOnChange} type="password" id="inputPassword5" className="form-control"></textarea>
            <div className='my-3'>
            <button onClick={convertUppercase} type="button" className="btn btn-danger my-2 mx-2">Convert it to UpperCase</button>
            <button onClick={convertLowercase} type="button" className="btn btn-danger my-2 mx-2">Convert it to LowerCase</button>
            <button onClick={removePunctuation} type="button" className="btn btn-danger my-2 mx-2">Remove Punctuation</button>
            <button onClick={removeExtraSpace} type="button" className="btn btn-danger my-2 mx-2">Remove Extra Space</button>
            <button onClick={clearText} type="button" className="btn btn-danger my-2 mx-2">Clear Text</button>
            </div>
            <p style={props.Style} className='my-3'>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
            <h2 className='font' style={props.Style} className='my-2 font'>Preview Text</h2>
            <div className='font'  style={props.Style}><p>{text.length>0?text:"Enter text in the Above Text box to Preview the Text"}</p></div>
        </div>
        </>
    )
}
