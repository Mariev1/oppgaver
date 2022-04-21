// Question 1

function receivingFunction(someFunction) {

  console.log("The argument is a " + typeof someFunction);

  if(typeof someFunction === "function") {
    someFunction();
  }
  else {
    console.log("The argument is not a function");
  }

}

const callbackFunction = function() {

  console.log("I am a callback function");

}


receivingFunction(callbackFunction);

// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(prize) {
  console.log(prize);
});

//for (let i = 0; i < prizes.length; i++) {
//    console.log(`Prize ${i + 1}: ${prizes[i]}`);
//}

// Question 3

setTimeout(function() {
  console.log("I waited 5 seconds before executing");
}, 5000);

// Question 4

let count = 0;

const intervalId = setInterval(function() {

  count++;

  if(count === 4) {
    clearInterval(intervalId);
  }

  console.log(count)
}, 1500);






