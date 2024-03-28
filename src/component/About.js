import React, { useState } from 'react'

export default function About() {
const[mystyle,setstyle] = useState({
    color: 'black',
    background: 'white',
    border: '1px solid black'
})
const[name,setname] = useState('Light Mode')
const changestyle = ()=>{
    if(mystyle.color === 'white'){
        setstyle({
            color: 'black',
            background: 'white',
            border: '1px solid black'
        })
        setname('Light Mode')
    }else{
        setstyle({
            color: 'white',
            background: 'black',
            border: '1px solid white'
        })
        setname('Dark Mode')
    }
}
  return (
    <>
        <div className='container' style={mystyle} >
            <h1 className='my-2'>About As</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
             <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mystyle}>
            Accordion Item #1
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
            Accordion Item #2
        </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
            Accordion Item #3
        </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
            </div>
            <div className="form-check form-switch m-4">
                <input onClick={changestyle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{name}</label>
            </div>
        </div>
    </div>
    </>
  )
}
