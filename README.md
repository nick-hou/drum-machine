# Drum Machine App

---

Project #3 of freeCodeCamp's front end certification. Currently hosted on [Github Pages](https://nick-hou.github.io/drum-machine/)

This app imitates a [drum machine](https://upload.wikimedia.org/wikipedia/commons/6/6c/Roland_TR-505_drum_machine.jpg), where you press a button to play a pre-recorded percussion sound. You can flip the track to get a new set of sounds. In this app, you can also play with your keyboard.

This project was obviously tailored by the folks at FCC as a learning exercise; nonetheless, the app lends itself well to React and Redux with frequently rendered components (keys on click, status display) and global variables (power, volume, track). I learned a lot about logic flow in Redux apps, and how intuitive the framework really is.

Each button has a CSS class stored in its local state, which gets changed to simulate a flash anytime the button is pressed. It also dispatches a "pressKey" action to the state, which allows the app to play audio and populate the display. The app checks the state's volume and track (and power) before playing any audio to ensure the right sound is played. 

To run the project locally, simply clone the repo, run "npm build" then "npm start"
