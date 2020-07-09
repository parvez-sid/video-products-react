var axios = require("axios"),
    BASE_URL = process.env.REACT_APP_API_HOST,
    registerURL = "/users/signup",
    productsURL = "/product/get_all",
    usersURL = "/users/get_all",

    ApiHandler = {
        signUp : function(payload, callback) {
          axios.post(BASE_URL + registerURL, payload)
            .then(response => {
              return response;
            })
            .catch(function (error) {
              return error;
            })
            .then(callback);
        },

        getProducts : function(cb){
        axios.get(BASE_URL + productsURL)
        .then(response => {
          return response;
        })
        .catch(function(error) {
          return error;
        })
        .then(cb);
        },

        getUsers : function(cb){
          axios.get(BASE_URL + usersURL)
          .then(response => {
            return response;
          })
          .catch(function(error) {
            return error;
          })
          .then(cb);
        }
      };
    module.exports = ApiHandler;