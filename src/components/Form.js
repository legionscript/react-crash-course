import React, { useState, useEffect } from 'react';

const Form = ({ text }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
  	console.log(username, password)	
  }, [username, password])

  return (
    <div>
    	<p>{text}</p>
    	<div>
    		<label htmlFor='username'>Username</label>
    		<input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} />
    	</div>

    	<div>
    		<label htmlFor='password'>Password</label>
    		<input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
    	</div>

    	<div>
    		<input type='submit' value='Login' />
    	</div>
    </div>
  )
}

export default Form;