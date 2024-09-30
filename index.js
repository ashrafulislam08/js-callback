function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodBye() {
  console.log("Goodbye!");
}

// greet("Alice", sayGoodBye);

function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    callback(data);
  }, 2000);
}

// fetchData((data) => {
//   console.log(`Data received: `, data);
// });

function callback(data) {
  console.log("Data received:", data);
}

fetchData(callback);
