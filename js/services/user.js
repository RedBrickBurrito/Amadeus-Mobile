import axios from "axios"

const baseURL = 'https://amadeus-ar.herokuapp.com'

export async function signUp(data){
    return new Promise((resolve, reject) =>{ 
        axios.post(`${baseURL}/api/signUp`, data).then((response)=>{
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