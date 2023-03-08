import React from 'react';
import '../index.css'

const Event = (props) => {
return (<div className="Event">
        <img id='image' src={props.img_src} alt={props.img_alt}/>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <a href={props.link}>
        <button id="button"> See Event </button>
        </a>
    </div>
)
}

export default Event;