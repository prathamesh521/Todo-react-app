import React from 'react'

const TodoForm = ({ handleSubmit, handleChange, text, isEditing}) => {
    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <h3>Add task</h3>
                <input type='text' value={text} onChange={handleChange} 
                placeholder='Enter task..' required/>
                <br />
                <input type='submit' className={isEditing ? 'btn btn-edit' : 'btn btn-add'} 
                value={isEditing ? 'Edit' : 'Add'}/>
            </form>
        </div>
    )
}

export default TodoForm
