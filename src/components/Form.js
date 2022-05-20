import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Form = ({ text }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [selectInput, setSelectInput] = useState('')

  useEffect(() => {
  	// console.log(username, password, selectInput)	
    // getData()
  }, [])

  // const getData = async () => {
  //   // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos') 
  //   // console.log(data)
  //   // fetch('https://jsonplaceholder.typicode.com/todos')
  //   //   .then(response => response.json())
  //   //   .then(json => console.log(json))
  // }

  const handleSubmit = async e => {
    // logic for form submission
    e.preventDefault()
    // console.log('form submit!')
    // console.log(username, password, selectInput)

    const body = {
      testData: 5
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // await axios.post('https://jsonplaceholder.typicode.com/todos', body, config)
  
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json))
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