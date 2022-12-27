import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

/*
memo = [
    {
        'Id' : ~~~~
        'Email' : ~~~~
        'content' : ~~~~
    }
]
*/

const Input = ({addMemo}) => {
    const [isId, setId] = useState('ID')
    const [isEmail, setEmail] = useState('Email')
    const [isIContent, setContent] = useState('Content')

    const handleIdChange = (e) => {
        setId(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleContenthange = (e) => {
        setContent(e.target.value)
    }

    const hadleButton = () => {
        addMemo(isId, isEmail, isIContent)
    }

    return(
        <div>
            <input onChange={handleIdChange} value={isId}></input>
            <input onChange={handleEmailChange} value={isEmail}></input>
            <textarea onChange={handleContenthange} value={isIContent}></textarea>
            <button onClick={hadleButton}>submit</button>
        </div>
    )
}

export default Input;