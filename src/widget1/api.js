// Define the URL you want to request data from
import config from "../config"

export default {
    getUsers() {
      // Make a GET request using the fetch() function
      fetch(config.TestingApi + 'users')
        .then((response) => {
          // Check if the response status is OK (200)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Parse the response as JSON
          return response.json();
        })
        .then((data) => {
          // Handle the data from the response
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error("Fetch error:", error);
        });
    }
}