import fetch from "node-fetch";

// Everything gets run through the "event loop", which keeps checking if there
// is something to run. In this case, the event loop passes to the JS
// interpreter:
//   1. The __main__ of this file
//   2. The function that was put into the timeout, which is passed to the event
//   loop by the Timer API
// Asynchronous events get added to the event loop, but they always have to wait
// until the __main__ event finishes.


function say(message) {
  console.log(message);
}

function greet() {
  console.log("Hello!");
}

function delay(fn) {
  setTimeout(fn, 390);
}

function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((body) => body.message)
    .catch((error) => console.error(error));
}

console.log("Starting program...");

// There is no way to know which of these will run first
// Both will happen in some order after the __main__ finishes
// Note: Each *.then() adds a *new* thing to the event loop that has to wait in
// line if something else is there ahead of it
delay(greet);
getRandomDog().then(console.log);

say("Goodbye!");

console.log("Done!");
