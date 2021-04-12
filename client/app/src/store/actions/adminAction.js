import swal from 'sweetalert';
import axios from 'axios';

export function adminLogin({ url, history, payload }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'POST',
      data: {
        email: payload.email,
        password: payload.password
      }
    })
      .then(({ data }) => {
        dispatch(setAdmin(data))
        history.push('/');
        swal({
          title: "Login Success",
          text: `Welcome ${data.name}`,
          icon: "success",
          button: "Aww yiss!",
        });
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export function setAdmin(payload) {
  return { type: 'admin/setAdmin', payload };
}