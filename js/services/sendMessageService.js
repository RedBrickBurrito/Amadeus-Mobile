import axios from "axios";

const baseURL = "https://amadeus-ar.herokuapp.com";

export async function sendMessage(message) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/api/message`, { message: JSON.stringify(message) })
      .then((response) => {
        const responseData = response;

        resolve(responseData);
      })
      .catch((error) => {
        const responseData = error.response;
        if (responseData.error) {
          console.log("server error");
          console.log(responseData.error);
        }

        reject(responseData);
      });
  });
}
