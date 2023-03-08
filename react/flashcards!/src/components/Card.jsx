import react from 'react';
import {render} from 'react-dom';

const Card = (props) => {
    return (
        <div className='card' onClick={props.click}>
             <div className={props.classname} front={props.front} back={props.back}> 
            <p> {props.display}</p>
            <img id='img' src={props.img_src}/>
        </div>
        </div>
       
    )
}

export default Card;