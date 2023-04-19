import React, { useState } from 'react';

function Protected() {
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or authentication logic here
    alert(`Password submitted: ${password}`);
  }
  
  return (
    <div className="container">
      <h1>Password Protected</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Protected;
