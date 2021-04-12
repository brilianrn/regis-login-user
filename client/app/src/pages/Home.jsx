import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import baseUrl from '../api';
import { setUsersAsync } from '../store/actions/userAction';
import Loading from '../components/Loading';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const url = baseUrl + '/user';
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminReducer.admin);
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    if (admin.name) {
      dispatch(setUsersAsync({ url, setLoading }))
    }
  }, []);

  function toDetail(params) {
    const { event, id } = params;

    event.preventDefault();
    history.push('/profile-detail/' + id);
  }

  return (
    <div className='container'>
      {!admin.name ? <b>You are not admin!</b> : <p className='h2 text-center mb-3 mt-3'>Users List</p>}
      {loading ? <Loading /> :
        <>
          <i>*)) Click name for user detail</i>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {users.map((user, i) => {
              return (
                <div class="col" key={i}>
                  <div class="card h-100">
                    <img src={user.image} class="card-img-top" alt={user.name} />
                    <div class="card-body">
                      <a href="#" onClick={(event) => { toDetail({ event, id: user.id }) }}>
                        <h5 class="card-title text-dark text-center">{user.name}</h5>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      }
    </div>
  )
}
