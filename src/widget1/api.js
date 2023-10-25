// Define the URL you want to request data from
import config from "../config.js";
import axios from "axios";

export default {
  getUsers() {
    // Make a GET request using the fetch() function
    fetch(config.env.TestingApi + "users")
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
  },

  async getUserBalance() {
    // this.$axios({
    //   method: "get",
    //   url: "http://bit.ly/2mTM3nY",
    //   responseType: "stream",
    // }).then(function (response) {
    //   response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    // });

    console.log(this.$axios);
  },

  async testApi() {
    const headers = { "Content-Type": "application/json" };
    const response = await axios.get(config.env.TestingApi + "users", {
      headers,
    });
    const data = response.data;
    console.log(data);
    return data;
  },

  // getUsers() {
  //   console.log(config.env);
  // }
};
