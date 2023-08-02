import fetch from "node-fetch";

function getRandomDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((body) => body.message)
    .catch((error) => console.error(error));
}

getRandomDog().then(console.log);
console.log(getRandomDog());

// async does two things
// 1. Wraps whatever you return in a Promise
// 2. Lets you use await
async function getRandomDogAgain() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const body = await response.json();
  return body.message;
}

// With error catching
async function getRandomDogAgainAgain() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const body = await response.json();
    return body.message;
  } catch (error) {
    console.error(error);
  }
}

// getRandomDogAgain().then(console.log);

// Top-level await (not supported in all environments)
const randomDog = await getRandomDogAgain();
console.log(randomDog);

// // This won't work because it's not an async function
// function test() {
//   const randomDog = await getRandomDogAgain();
//   console.log(randomDog);
// }
// test();
