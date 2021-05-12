import React, { useState, useEffect } from 'react'
import ShowTodos from './ShowTodos'
import TodoForm from './TodoForm'

const getLocalStorage = () => {
    let data = localStorage.getItem('Tasks')
    if(data){
        return JSON.parse(localStorage.getItem('Tasks'))
    }
    else{
        return []
    }
}
const Main = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState(getLocalStorage())
    const [id, setId] = useState(0)
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setText(e.target.value)
        const newItem = {
            id: id,
            text: text
        }
        setData([...data, newItem])
        console.log(data)
        setId(Math.floor(Math.random() * 10000))
        setText('')
        setIsEditing(false)
    }

    useEffect(() => {
        localStorage.setItem('Tasks', JSON.stringify(data))
    }, [data])


    const deleteItem = (id) => {
        setData(data.filter(value => value.id != id))
    }

    const modifyItem = (id) => {
        const selectedItem = data.find(value => value.id == id)
        setData(data.filter(value => value.id != id))
        setText(selectedItem.text)
        setIsEditing(true)
        setId(id)
        }
    return (
        <div>
            <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} text={text} isEditing={isEditing}/>
            <ShowTodos data={data} deleteItem={deleteItem} modifyItem={modifyItem}/>
        </div>
    )
}

export default Main

