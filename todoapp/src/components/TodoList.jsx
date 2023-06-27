import  { useEffect, useState } from 'react'
import '../App.css';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            task: todo,
            isCompleted: false
        }
        setTodos([...todos, newTodo]);
        setTodo('');
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(newTodos);
    }

    const toggleCompleted = (id) => {
        const newTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const editTodo = (id) => {
        const newTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        })
        setTodos(newTodos);
        setTodoEditing(null);
        setEditingText('');
    }

    return (
        <div className='todo-list'>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    placeholder='Write your task'
                />
                <button type="submit">Add task</button>
            </form>   
            {todos.map((todo) => (
                <div className="todo-item" key={todo.id}>
                    {todoEditing === todo.id ?
                        (<div ><input
                            type="text"
                            onChange={(e) => setEditingText(e.target.value)}
                            value={editingText} />
                        </div>) :
                        (<div className='todo-item-task'>{todo.task}</div>)}   
                    <button
                        onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                    
                    {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)}>Submit</button>) : (<button onClick={() => setTodoEditing(todo.id)}>Edit</button>)}
                    <input
                        type="checkbox"
                        onChange={() => toggleCompleted(todo.id)}
                        checked={todo.isCompleted}
                    />
                    
                </div>
            ))}
        </div>  
    );
}
