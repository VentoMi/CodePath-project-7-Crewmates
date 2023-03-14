import { useState} from 'react';

const AnsForm = ({borderColor, visibility, submitForm}) => {
    const [Answer, setAnswer] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value
        setAnswer (newValue, ...Answer)
        
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
         submitForm(Answer);
         setAnswer ("")
        
    }

    // const resetInput = (reset) => {
    //     if (reset=="Y") {
    //         setAnswer("")
    //     }
    // }

    // resetInput(reset);

    return (

        <form onSubmit={handleOnSubmit} style={{visibility: visibility}}>
    
        <label>
         <h2>Your Answer:{Answer}</h2>

            <input style={{border: "5px solid", borderColor: borderColor}} value={Answer} type="text" onChange={handleChange} name="answerForm" 
            placeholder='Enter your answer here'/>
        </label>     
        <input type="submit" value="Submit Guess" className="actionButton"/>
        </form>
    )
}

export default AnsForm