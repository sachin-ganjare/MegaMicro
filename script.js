

// Simulate an event that triggers the termination of the preloader
// You can replace this with an actual event or function that signifies the end of loading
setTimeout(function() {
  terminatePreloader();
}, 2000); // Terminate after 4 seconds (adjust as needed)

  
var preloader = document.querySelector(".preloader");
preloader.style.display = "flex";

// Wait for a specific duration (e.g., 4 seconds) before hiding the preloader
setTimeout(function() {
  preloader.style.display = "none";
}, 2000); // 4000 milliseconds = 4 seconds

   // Function to terminate the preloader
   function terminatePreloader() {
    var preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
  }
  
