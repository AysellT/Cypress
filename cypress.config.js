const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:800  ,
  viewportWidth:1200 ,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl : "https://www.google.com",
    projectId: "5b7k2n",
    "video":false, //video kaydi alip almamasini ayarliyoruz
    "retire":2 //fail olan testin 2 kere daha calismasini saglar

  },
});

 