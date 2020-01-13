import React from 'react'
import Item from './Item'

const List = ({ todos }) => {
    return (
        <ul>
            {
                todos.map((todo, i) => (
                    <Item content={todo} id={i} />
                ))
            }
        </ul>
    )
}

export default List