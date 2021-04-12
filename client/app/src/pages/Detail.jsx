import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import baseUrl from '../api';
import { userDetailAsync } from '../store/actions/userAction';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = baseUrl + '/user/' + id;
  const user = useSelector((state) => state.userReducer.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(userDetailAsync({ url, setLoading }))
  }, []);

  return (
    <div className='container'>
      <p className='h2 text-center mb-3 mt-3'>User Profile Detail</p>
      {loading ? <Loading /> :
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img id='img-detail' src={user.image} alt={user.name} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{user.name}</h5>
                <p class="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
