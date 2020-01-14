import React, { useState } from 'react';


const Item = ({ content, id, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false)

    const [isDone, setIsDone] = useState(false)
    let btnText = isDone ? '戻す' : '完了！'

    const handleClick = () => {
        setIsDone(!isDone)
    }
    return (
        <li>
            <span>{id + 1}:</span>
            {
                isEditing
                    ? <input type="text" value="" />
                    : <span>{content}</span>
            }
            <button onClick={handleClick}>
                {btnText}
            </button>
            <button onClick={() => { deleteTodo(id) }}>削除</button>
            <button onClick={() => { setIsEditing(!isEditing) }}>編集</button>
        </li>
    )
}

export default Item