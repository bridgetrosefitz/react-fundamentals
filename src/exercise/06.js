// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const [error, setError] = React.useState('')
  const [inputValue, setInputValue] = React.useState('')

  const handleChange = event => {
    const incomingValue = event.target.value
    // Set the value of the input to whatever the user types, even if there's a capital letter
    setInputValue(incomingValue)

    // Check if the input is valid
    const isValid = incomingValue === incomingValue.toLowerCase()

    // If the input is not valid
    if(!isValid) {
      // Update the error message
      setError('Houston, we have an error - please use lower case only')
    } else {
    // As soon as the inputValue is valid, clear error
      setError('')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label >Username:</label>
        <input value={inputValue} onChange={handleChange}/>
      </div>
      <button type="submit" disabled={error.length > 0}>Submit</button>
      <div style={{color: 'red'}} role='alert'>{error}</div>
    </form>
  )
}

////////////////////////////

function App() {

  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
