import React, { useState } from 'react';
import Form from './Form'
import List from './List'


// const a = [todos, setTodos]

const App = () => {
    const [todos, setTodos] = useState([
        '宿題をする',
        '洗濯をする',
        '仕事に行く',
        '片付けをする',
        'おえええええええ'
    ])

    const addTodo = (value) => {
        const newTodos = [
            ...todos,
            value
        ]
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const deleteTodos = todos.filter((todo, index) => {
            return index !== id
        })
        setTodos(deleteTodos)

    }


    return (
        <>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App