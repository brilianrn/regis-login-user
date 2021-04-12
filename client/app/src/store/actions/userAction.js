import axios from 'axios';
import swal from 'sweetalert';

export function setUsers(payload) {
  return { type: 'users/setUsers', payload };
}

export function setUsersAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET'
    })
      .then(({ data }) => {
        dispatch(setUsers(data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export function userRegisterAsync({ url, payload, history }) {
  axios({
    url: url,
    method: 'POST',
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      image: payload.image
    }
  })
    .then(({ data }) => {
      history.push('/');
      swal({
        title: "Success Register",
        text: `Hi, ${data.name}`,
        icon: "success",
        button: "Aww yiss!",
      });
    })
    .catch(err => {
      console.log(err);
    })
}

export function userDetailAsync({ url, setLoading }) {
  axios({
    url: url,
    method: 'GET'
  })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
}