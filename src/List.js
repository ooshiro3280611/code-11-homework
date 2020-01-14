import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo, i) => (
                    <Item
                        content={todo}
                        id={i}
                        deleteTodo={deleteTodo} />
                ))
            }
        </ul>
    )
}

export default List