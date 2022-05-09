import React, { useState, useEffect } from 'react';

const Form = ({ text }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [selectInput, setSelectInput] = useState('')

  useEffect(() => {
  	// console.log(username, password, selectInput)	
  }, [username, password, selectInput])

  const handleSubmit = e => {
    // logic for form submission
    e.preventDefault()
    console.log('form submit!')
    console.log(username, password, selectInput)
  }

  return (
    <form onSubmit={handleSubmit}>
    	<p>{text}</p>
    	<div>
    		<label htmlFor='username'>Username</label>
    		<input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} />
    	</div>

    	<div>
    		<label htmlFor='password'>Password</label>
    		<input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
    	</div>

      {/*<textarea value={username} />*/}

      <select value={selectInput} onChange={e => setSelectInput(e.target.value)}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>

      {/*<input type='file' />*/}

    	<div>
    		<input type='submit' value='Login' />
    	</div>
    </form>
  )
}

export default Form;