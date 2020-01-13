import React, { useState } from 'react';

const Item = ({ content, id }) => {
    const [isDone, setIsDone] = useState(false)
    let btnText = isDone ? '戻す' : '完了！'

    const handleClick = () => {
        setIsDone(!isDone)
    }
    return (
        <li>
            <span>{id + 1}:</span>
            <span>{content}</span>
            <button onClick={handleClick}>
                {btnText}
            </button>
        </li>
    )
}

export default Item