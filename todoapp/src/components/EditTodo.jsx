import React, { useState } from 'react'

export const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    }

    return (
        <form onSubmit={handleSubmit} className='addTodo'>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' />
            <button type="submit" className='todo-btn'>Add task</button>
        </form>
    )
}
