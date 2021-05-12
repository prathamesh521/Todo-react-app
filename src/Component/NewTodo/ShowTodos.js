import React from 'react'

const ShowTodos = ({ data, deleteItem, modifyItem }) => {
    return (
        <div>
            <h3>Todos</h3>
                <ul className='list'>
                    {
                        data.map((value) => {
                        return <li key={value.id} className='flex'>
                                <p className='flex-para'>{value.text} </p>
                                <div >
                                    <button className='btn btn-delete' onClick={() => deleteItem(value.id)}>
                                        delete</button>
                                    <button className='btn btn-modify' onClick={() => modifyItem(value.id, value.text)}>
                                        modify</button>
                                </div>
                            </li>
                        })
                    }
                </ul>
        </div>
    )
}

export default ShowTodos
