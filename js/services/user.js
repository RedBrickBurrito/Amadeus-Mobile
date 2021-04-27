import axios from 'axios';

const baseURL = 'http://192.168.1.79:4321';

export async function logIn(data) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/api/logIn`, data) // TODO: Need to change the url to deployed backend url
      .then((response) => {
        const responseData = response.data;

        resolve(responseData);
      })
      .catch((error) => {
        const responseData = error.response.data;
        if (responseData.error) {
          console.log('server error');
          console.log(responseData.error);
        }

        reject(responseData);
      });
  });
}
