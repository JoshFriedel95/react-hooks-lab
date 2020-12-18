import React, {useState} from 'react'

const AddToDo = props => {
    const [userInput, setUserInput] = useState('')

    function handleAddToDo(e) {
        e.preventDefault()
        props.addToDo(userInput)
        setUserInput('')
    }

    return (
        <form onSubmit={handleAddToDo}>
            <input 
            placeholder='Add to list!'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

export default AddToDo