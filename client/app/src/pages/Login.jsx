import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { adminLogin } from '../store/actions/adminAction';
import baseUrl from '../api';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = baseUrl + '/admin/login';

  function getEmail(event) {
    setEmail(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function login(event) {
    let payload = { email, password };

    event.preventDefault();
    dispatch(adminLogin({ url, payload, history }));
  }
  return (
    <div className='container'>
      <p className='h2 text-center'>Admin Login</p>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getEmail} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={getPassword} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(event) => { login(event) }}>Login</button>
      </form>
    </div>
  )
}
