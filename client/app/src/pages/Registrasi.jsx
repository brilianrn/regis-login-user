import React, { useState } from 'react';
import baseUrl from '../api';
import { useHistory } from 'react-router-dom';
import { userRegisterAsync } from '../store/actions/userAction';

export default function Registrasi() {
  const url = baseUrl + '/user/register';
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const payload = { name, email, password, image };

  function getName(event) {
    setName(event.target.value);
  }

  function getEmail(event) {
    setEmail(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function getImage(event) {
    setImage(event.target.value);
  }

  function sendNewUser(event) {
    event.preventDefault();
    userRegisterAsync({ url, payload, history });
  }

  return (
    <div className='container'>
      <form>
        <p className='h2 text-center'>Register</p>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" onChange={getName} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getEmail} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={getPassword} />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Image</label>
          <input type="text" class="form-control" id="image" onChange={getImage} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={(event) => { sendNewUser(event) }}>Submit</button>
      </form>
    </div>
  )
}
