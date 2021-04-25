import axios from 'axios';

const baseURL = 'http://192.168.1.67:3000';

export async function sendMessage(message) {
    return new Promise((resolve, reject) => {
        axios
            .post(`${baseURL}/api/message`, message)
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
            })
    })
}