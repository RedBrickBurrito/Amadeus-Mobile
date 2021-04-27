
import axios from 'axios';

const baseURLLogin = 'http://192.168.1.79:4321';

const baseURLSignUp = 'http://192.168.100.8:4321'

export async function logIn(data) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURLLogin}/api/logIn`, data) // TODO: Need to change the url to deployed backend url
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

export async function signUp(data){
    return new Promise((resolve, reject) =>{ 
        axios.post(`${baseURLSignUp}/api/signUp`, data).then((response)=>{
            const responseData = response.data;

            resolve(responseData);
        }).catch((error) => {
            const responseData = error.response.data;
            if(responseData.error){
                console.log('server error');
                console.log(responseData.error);
            }
            console.log(responseData);

            reject(responseData);
        });
        
    });
}

